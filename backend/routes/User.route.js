const router = require('express').Router()
const {requireSignin,isAuth, isAdmin} = require('../controller/Auth.controller')
const {userByID} = require('../controller/User.controller')

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
} )
router.param('userId', userByID)
module.exports = router