const Duty = require('../models/dutySchema.js')


module.exports ={

    create: async function(req,res){
       const duty = await Duty.create({
            people_id:req.body.people_id,
            duty:req.body.duty
        })
        const dutyData = await duty.save();
        return res.send(dutyData)
    },
    peopleByDuty: async function(req,res){
      const dutyData  = await  Duty.find({_id:req.body.duty_id}).populate({
        path:'people_id',
        match:{email: { $regex:'.*harsh.*', $options:'i' }},
        // match:{email:{ $eq:"vivek@gmail.com"}}  // $eq === equal to
        // match:{email:{$ne :"vs@gmail.com"}} // $ne === not equal to
        select:'name-_id',  // include-exclude
        // select:["name","email"]
        options:{
          sort:{name:1}, //1 means ascending order 
                      //-1 means descending order
            limit:2 // gives top 2 data whether in ascending or descending order
        }
      })
      res.send(dutyData)
    }
}