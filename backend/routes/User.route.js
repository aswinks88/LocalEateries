const router = require('express').Router()
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID, read, update} = require('../controller/User.controller')

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
} )
router.get('/user/:userId', requireSignin, isAuth, read)
router.put('/user/:userId', requireSignin, isAuth, update)
//here the user is made available if there is user id present in the request
router.param('userId', userByID)
module.exports = router