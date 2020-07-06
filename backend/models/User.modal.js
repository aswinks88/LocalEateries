const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const {v1: uuid} = require('uuid')
const userRegistration = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    encrypted_password: {type: String, required: true},
    about:{type: String, trim: true},
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    },
    date: { type: Date, default: Date.now}
},
{
    timestamps: true
})
// virtual field
userRegistration.virtual('password')
.set(function (password) {
    this._password = password
    this.salt = uuid()
    this.encrypted_password = this.encryptPassword(password)
})
.get(() => {
    return this._password
})
userRegistration.methods = {
    authenticate: function(plaintText){
        return this.encryptPassword(plaintText) === this.encrypted_password
    },

    encryptPassword: function (password){
        if(!password) return ''
        try{
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        } catch(err){
            return err
        }
    }
}
const userReg = mongoose.model('user', userRegistration)
module.exports = userReg