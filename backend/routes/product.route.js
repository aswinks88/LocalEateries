const router = require('express').Router()
const {createProduct, productById, read, remove,  updateProduct, list} = require('../controller/Product.controller')
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID} = require('../controller/User.controller')


router.get('/product/:productId', read)
router.post('/product/create/:userId', requireSignin, isAdmin, isAuth, createProduct)
router.delete('/product/:productId/:userId', requireSignin, isAdmin, isAuth, remove)
router.put('/product/:productId/:userId', requireSignin, isAdmin, isAuth, updateProduct)
router.get('/products', list)

router.param('productId', productById)


router.param('userId', userByID)
module.exports = router