const router = require('express').Router()
const {createProduct, productById, read} = require('../controller/Product.controller')
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID} = require('../controller/User.controller')


router.get('/product/:productId', read)
router.post('/product/create/:userId', requireSignin, isAdmin, isAuth, createProduct)

router.param('productId', productById)
router.param('userId', userByID)
module.exports = router