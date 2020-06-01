const router = require('express').Router()
const User = require('../../models/User.modal')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')
router.post('/', (req, res) => {
   const {email, password} = req.body

   if( !email || !password){
       return res.status(400).json({msg: 'All fields required'})
   }

   User.findOne({ email })
   .then( user =>{
       if(!user){
           return res.status(400).json({msg: 'User does not exists'})
       }
      //Validating password
      bcrypt.compare(password, user.password)
      .then(isMatch => {
          if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'})
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
   })
})

module.exports = router