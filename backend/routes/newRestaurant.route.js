const router = require('express').Router()
const restaurantModel = require('../models/Restaurant.model')
const multer = require('multer')
const path = require('path')
// const uuid = require('uuidv4')
// path(__dirname,'images')
const DIR = path.resolve('../backend/images')

router.route('/all').get((req,res) => {
    restaurantModel.find()
    .then(Restaurant => res.json(Restaurant))
    .catch(err => res.status(400).json('Error: ' + err))
})

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
    const uniqueid = req.body.uniqueid
    const date = req.body.date
    const additonalNotes= req.body.additonalNotes
    const restaurantDesc= req.body.restaurantDesc
    const seatingCapacity= req.body.seatingCapacity
    const phoneBooking= req.body.phoneBooking
    const onLine= req.body.onLine
    const cuisine= req.body.cuisine
    const timing= req.body.timing
    const services = req.body.services
    const restaurantTypes= req.body.restaurantTypes
    const byod= req.body.byod
    const alcohol= req.body.alcohol
    const booking= req.body.booking

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
        phonenumber,
        date,
        uniqueid,
        additonalNotes,
        restaurantDesc,
        seatingCapacity,
        phoneBooking,
        onLine,
        cuisine,
        timing,
        services,
        restaurantTypes,
        byod,
        alcohol,
        booking
    })
    console.log(Restaurant)
    Restaurant.save()
    .then(() => {
        res.json('New Restaurant Registered')
    })
    .catch(err => res.status(400).json('Error ' + err))
})

//handling file upload here, this is based on the documentaion from multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, file.fieldname + '-' + fileName)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Only .png, .jpg and .jpeg format allowed'))
        }
    }
})

router.route('/fileupload').post(upload.array('addfiles', 5),(req, res, next)=> {
    const reqFiles = [];
    // console.log(req.)
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + DIR + req.files[i].filename)
    }
  console.log(reqFiles)
    res.send(reqFiles)
}) 
module.exports = router