const formidable = require('formidable')
const _ = require('lodash')
const Product = require('../models/product.model')
const fs = require('fs')
const { errorHandler } = require('../helpers/dbErrorHandler')
exports.createProduct = (req, res) => {
const form = new formidable.IncomingForm()
form.keepExtensions = true
form.parse(req,(err, fields, files) => {
    if(err){
        return res.status(400).json({
            error: 'Image could not be uploaded'
        })
    }
    const product = new Product(fields)
    if(files.image){
        product.image.data = fs.readFileSync(files.image.path)
        product.image.contentType = files.image.type
    }
    product.save((err, result) => {
        if(err){
            console.log(err)
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(result)
    })
})
}