const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name:String,
    location:{
        type:{
            type:String,
            default:'Point'
        },
        address:String,
        coordinates:[{
            type:Number
        }]

    },
    lugar:{
        type:String,
        enum:["Boockstore","coffestore"],
        default:"coffestore"

    },
    address: String,
})

module.exports = mongoose.model('Restaurant', restaurantSchema)