const router = require('express').Router()
const {createCategory, categoryById, read, update, remove, list} = require('../controller/category.controller')
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID} = require('../controller/User.controller')

router.get('/category/:categoryId', read)
router.post('/category/create/:userId', requireSignin, isAdmin, isAuth, createCategory)
router.put('/category/:categoryId/:userId', requireSignin, isAdmin, isAuth, update)
router.delete('/category/:categoryId/:userId', requireSignin, isAdmin, isAuth, remove)
router.get('/categories', list)
router.param('categoryId', categoryById)
router.param('userId', userByID)
module.exports = router