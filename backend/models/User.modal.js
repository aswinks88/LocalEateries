const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userRegistration = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: { type: Date, default: Date.now}
},
{
    timestamps: true
})

const userReg = mongoose.model('user', userRegistration)
module.exports = userReg