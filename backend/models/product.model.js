const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema
const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true, maxlength: 2000},
    price: {type: Number, required: true},
    category: {type: ObjectId, ref: 'category', required: true},
    quantity: {type: Number},
    image: {data: Buffer, contentType: String},
    shipping: {required:false, type: Boolean}
},
{
    timestamps: true
})

const product = mongoose.model('product', productSchema)
module.exports = product