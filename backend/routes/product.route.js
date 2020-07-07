const router = require('express').Router()
const {createProduct} = require('../controller/Product.controller')
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID} = require('../controller/User.controller')

router.post('/product/create/:userId', requireSignin, isAdmin, isAuth, createProduct)
router.param('userId', userByID)
module.exports = router