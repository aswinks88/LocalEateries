const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const uuid = require('uuidv4')
// path(__dirname,'images')
const DIR = './FileRouter/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, uuid() + '-' + fileName)
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

router.route('/fileupload').post(upload.array('addfiles', 12),(req, res, next)=> {
    const files = req.files
    console.log(files)
    if(!files){
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
}) 

module.exports = router