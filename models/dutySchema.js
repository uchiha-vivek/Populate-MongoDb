const mongoose = require('mongoose')


const dutySchema = new mongoose.Schema({

        people_id:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'People'
        }],
        duty:{
            type:String
        }


},{

    timestamps:true
})

const duty = mongoose.model('Duty',dutySchema)
module.exports = duty