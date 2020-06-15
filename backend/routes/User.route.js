const router = require('express').Router()
const User = require('../models/User.modal')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')


router.post('/add', (req, res) => {
   const {name, email, password} = req.body

   if(!name || !email || !password){
       return res.status(400).json({msg: 'All fields required'})
   }

   User.findOne({ email })
   .then( user =>{
       if(user){
           return res.status(400).json({msg: 'User already exists'})
       }
       const newUser = new User({
        name, 
        email, 
        password
       })
       console.log(user)
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err
              newUser.password = hash
              newUser.save()
              .then(user => {
                  jwt.sign(
                      {id: user.id},
                      process.env.JWT_SECRET,
                      {expiresIn: 3600},
                      (err, token) => {
                          if(err) throw err
                          res.json({
                              token,
                            user:{
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                      }
                      )
              })
              .catch(err => {
                  res.send('user already exist')
              })
          })
      }) 
   })
})

router.get('/users', (req,res) => {
    User.find()
    .sort({date: -1})
    .then(items => {res.json(items)})
})
module.exports = router