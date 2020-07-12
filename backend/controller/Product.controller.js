const formidable = require('formidable')
const _ = require('lodash')
const Product = require('../models/product.model')
const fs = require('fs')
const { errorHandler } = require('../helpers/dbErrorHandler')
const product = require('../models/product.model')
const category = require('../models/category')

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

exports.remove = (req, res) => {
    const product = req.product
product.remove((err, deleteProduct) => {
    if(err) {
        return res.status(400).json({
            error: errorHandler(err)
        })
    }
    res.json({
        message: 'product deleted successfully'
    })
})
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

exports.updateProduct = (req, res) => {
    const form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req,(err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
    //validate all fields
    const{
        name, 
        description, 
        price, 
        category, 
        quantity, 
        shipping
    } = fields
    if(!name || !description || !price || !category || !quantity || !shipping){
        return res.status(400).json({
            error: 'All fields required'
        })
    }
        let product = req.product
        product = _.extend(product, fields)
    
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
    /*sorting product(sell/ recent arrival etc...) */
    exports.list = (req, res)=>{
        const order = req.query.order ? req.query.order : 'asc'
        const sortBy = req.query.sortBy ? req.query.sortBy : '_id'
        const limit = req.query.limit ? parseInt(req.query.limit) : 6

        Product.find().select('-image')
        .populate('category')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, product) => {
            if(err){
                return res.status(400).json({
                    error: 'Product not found'
                })
            }
            res.send(product)
        })
        
    }
/*find the product based on req 
ne = not including*/
    exports.listRelated = (req, res) => {
        const limit = req.query.limit ? parseInt(req.query.limit) : 6
        Product.find({_id: {$ne: req.product}, category: req.product.category})
        .limit(limit)
        .populate('category', '_id name')
        .exec((err, products) => {
            if(err){
                return res.status(400).json({
                    error: 'Product not found'
                })
            } 
            res.send(products)
        })
    }

    exports.listCategories = (req, res) => {
        Product.distinct('category', {}, (err, categories) => {
            if(err){
                return res.status(400).json({
                    error: 'Product not found'
                })
            } 
            res.send(categories)
        })
    }