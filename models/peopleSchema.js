const mongoose = require('mongoose')


const peopleSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{

        type:String,
        required:true
    }
},{
    timestamps:true
})

const people = mongoose.model('People',peopleSchema)
module.exports = people