const router = require('express').Router()
const restaurantModel = require('../models/Restaurant.model')
router.route('/add').post((req, res) => {
    const name = req.body.name
    const street = req.body.address.street
    const suburb = req.body.address.suburb
    const city = req.body.address.city
    const zip = req.body.address.zip
    const email = req.body.email
    const phonenumber = req.body.phonenumber
    const deliveryservices = req.body.deliveryservices
    const charges = req.body.charges
    const contactless = req.body.contactless
    const website = req.body.website
    const openinghours = req.body.openinghours
    const uniqueid = req.body.uniqueid
    const date = req.body.date
    const Restaurant = new restaurantModel({
        name,
        address: {
            street,
            suburb,
            city,
            zip
        },
        email,
        deliveryservices,
        charges,
        contactless,
        website,
        openinghours,
        phonenumber,
        date,
        uniqueid,
    })
    console.log(Restaurant)
    Restaurant.save()
    .then(() => {
        res.json('New Restaurant Registered')
    })
    .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router