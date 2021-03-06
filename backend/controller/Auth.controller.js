const User = require('../models/User.modal')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const {errorHandler} = require('../helpers/dbErrorHandler')
require('dotenv').config()
exports.getUser = (req,res) => {
    User.find()
    .sort({date: -1})
    .then(items => {res.json(items)})
}
exports.addUser = (req, res) => {
    console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                error: 'User with this email already exist'
            })
        }
        user.salt = undefined
        user.encrypted_password = undefined
        res.json({
            user
        })
    })
}

exports.signin = (req,res) => {
//find resgistered user based on email
const {email, password} = req.body
User.findOne({email}, (err, user) => {
    if(err || !user){
        return res.status(400).json({
            error: 'User with that email does not exist, Please signup'
        })
    }

//create authentication method
if(!user.authenticate(password)){
    return res.status(401).json({
        error: 'Email and password dont match'
    })
}
//generate a signed token with user id and secret
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    res.cookie('t', token, {expire: new Date() + 9999})

    const {_id, name, email, role} = user
    return res.json({token, user: {_id, email, name, role}})
})
}

exports.signout = (req,res) => {
    res.clearCookie('t')
    res.json({message: 'signout success'})
}


exports.requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth',
    algorithms: ['HS256']
})

exports.isAuth = (req, res, next) => {
    const user = req.profile && req.auth && req.profile._id == req.auth.id
    console.log( req.profile && req.auth && req.profile._id == req.auth.id)
    if(!user){
        return res.status(403).json({
            error: 'Access Denied'
        })
    }
    next()
}

exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0){
        return res.status(403).json({
            error: 'Access Denied, Admin only'
        })
    }
    next()
}
    // jwt.verify(req.token, process.env.JWT_SECRET, (err, authorizeUser) => {
    //     if(err){
    //         console.log('error')
    //        return res.json('error')
    //     } else{
    //         res.json({
    //             message:'login success',
    //             authorizeUser
    //         })
    //     }
    //     // console.log('success')
    // })
    

// exports.addUser = (req, res) => {
//     const {name, email, password} = req.body
 
//     if(!name || !email || !password){
//         return res.status(400).json({msg: 'All fields required'})
//     }
 
//     User.findOne({ email })
//     .then( user =>{
//         if(user){
//             return res.status(400).json({msg: 'User already exists'})
//         }
//         const newUser = new User({
//          name, 
//          email, 
//          password
//         })
//         console.log(user)
//        bcrypt.genSalt(10, (err, salt) => {
//            bcrypt.hash(newUser.password, salt, (err, hash) => {
//                if(err) throw err
//                newUser.password = hash
//                newUser.save()
//                .then(user => {
//                    jwt.sign(
//                        {id: user.id},
//                        process.env.JWT_SECRET,
//                        {expiresIn: 3600},
//                        (err, token) => {
//                            if(err) throw err
//                            res.json({
//                                token,
//                              user:{
//                                  id: user.id,
//                                  name: user.name,
//                                  email: user.email
//                              }
//                          })
//                        }
//                        )
//                })
//                .catch(err => {
//                    res.send('user already exist')
//                })
//            })
//        }) 
//     })
//  }