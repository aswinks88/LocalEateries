const router = require('express').Router()
const {createCategory} = require('../controller/category.controller')
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID} = require('../controller/User.controller')

router.post('/category/create/:userId', requireSignin, isAdmin, isAuth, createCategory)
router.param('userId', userByID)
module.exports = router