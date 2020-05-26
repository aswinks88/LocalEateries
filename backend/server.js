const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 5001
const restaurantRouter = require('./routes/newRestaurant.route')
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.catch((err => {
    console.log(err)
}))

const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongodb connection established successfully')
})
app.use('/restaurant', restaurantRouter)
app.listen(port, () =>{
    console.log(`server is running on port: http://localhost:${port}`)
})