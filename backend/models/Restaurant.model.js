const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    website: {type: String, required: true},
    phonenumber:{type: String, required: true},
    delivery: {type: String, required: true},
    workinghours: {type: TimeRanges, required: true},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zip: {type: Number, required: true}
    },
    uniqueid: {type: String, required: true},
    date: {type: Date, required: true}
},
{
    timestamps: true
}
)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant