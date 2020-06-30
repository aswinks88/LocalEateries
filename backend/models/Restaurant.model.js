const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {type: String, required: true},
    address: {
        street: {type: String, required: true},
        suburb: {type: String, required: true},
        city: {type: String, required: true},
        zip: {type: Number, required: true}
    },
    email: {type: String, required: true},
    website: {type: String, required: true},
    phonenumber:{type: String, required: true},
    deliveryservices: {type: String, required: true},
    charges: {type: String, required: true},
    contactless:  {type: String, required: true},
    uniqueid: {type: String, required: true},
    date: {type: Date, required: true},
    additonalNotes:{type: String, required: true}, 
    restaurantDesc: {type: String, required: true},
    seatingCapacity: {type: String, required: true},
    phoneBooking:{type: String, required: true},
    onLine: {type: String, required: true},
    cuisine: {type: String, required: true},
    timing: {type: Array, required: true},
    services :{type: Array, required: true},
    restaurantTypes: {type: Array, required: true},
    byod: {type: String, required: true},
    alcohol: {type: String, required: true},
    booking: {type: String, required: true}
},
{
    timestamps: true
}
)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant