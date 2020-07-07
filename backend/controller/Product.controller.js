const formidable = require('formidable')
const _ = require('lodash')
const Product = require('../models/product.model')
const fs = require('fs')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.productById = (req,res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if(err || !product) {
            return res.status(400).json({
                error: 'Product not found'
            })
        }
        req.product = product
        next()
    })
}

exports.read = (req, res) => {
    req.product.image = undefined
    return res.json(req.product)
}

exports.createProduct = (req, res) => {
const form = new formidable.IncomingForm()
form.keepExtensions = true
form.parse(req,(err, fields, files) => {
    if(err){
        return res.status(400).json({
            error: 'Image could not be uploaded'
        })
    }
//validate all fields
const{name, description, price, category, quantity, shipping} = fields
if(!name || !description || !price || !category || !quantity || !shipping){
    return res.status(400).json({
        error: 'All fields required'
    })
}


    const product = new Product(fields)

    if(files.image){
        // console.log('File Photo', files.image)
        if(files.image.size > 2000000){
            return res.status(400).json({
                error: 'Image size must not exceed 2mb'
            })
        }
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