const router = require('express').Router()
const fs =require('fs')
const file = require('../routes/cuisines.json')
router.route('/cuisines').get((req,res) => {
    
        const cuisines = fs.readFileSync('./routes/cuisines.json', 'utf8', (err, data) => {
            if(err){
                console.log(err)
            } else{
                console.log(data)
                return data
            }
        
       })
    // const cuisines = fs.readFileSync('../routes/cuisines.json')
    const parsedCuisinedData = JSON.parse(cuisines)
    return res.send(parsedCuisinedData)
})
module.exports = router