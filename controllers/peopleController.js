const People = require('../models/peopleSchema.js')

module.exports = {

    create: async function(req,res){
        const {name,email} = req.body
        const staff = await People.create({
            name,
            email
        })
        return res.send(staff)
    }
}