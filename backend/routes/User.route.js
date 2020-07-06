const router = require('express').Router()

const {getUser} = require('../controller/User.controller')
const {addUser} = require('../controller/User.controller')
const {signin} = require('../controller/User.controller')
const {signout} = require('../controller/User.controller')
const {userSignupValidator} = require('../Validator/signupValidator')

router.post('/add', userSignupValidator, addUser)
router.post('/signin', signin)
router.get('/signout', signout)
router.get('/users', getUser)
module.exports = router