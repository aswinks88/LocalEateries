const router = require('express').Router()
const {getUser, addUser, signout, signin, requireSignin} = require('../controller/Auth.controller')
const {userSignupValidator} = require('../Validator/signupValidator')

router.post('/signup', userSignupValidator, addUser)
router.post('/signin', signin)
router.get('/signout', signout)
// router.get('/hello',requireSignin, (req, res) => {
//     res.send('hi there')
// })
router.get('/users', getUser)
module.exports = router