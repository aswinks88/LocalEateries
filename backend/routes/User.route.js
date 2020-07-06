const router = require('express').Router()

const {getUser} = require('../controller/User.controller')
const {addUser} = require('../controller/User.controller')


router.post('/add', addUser)

router.get('/users', getUser)
module.exports = router