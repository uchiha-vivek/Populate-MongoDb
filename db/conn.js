const mongoose = require('mongoose')

const dbConnection = async function(){
    const DB_URI ='mongodb+srv://madara_uchiha:madara_uchiha@cluster0.8yubopf.mongodb.net/relation?retryWrites=true&w=majority'

    try{
       await mongoose.connect(DB_URI,{useUnifiedTopology:true})
       console.log(`Database connected successfully`)

    }catch(e){
        console.log(`Error while connecting to the Database`,e.message)


    }
}

module.exports = dbConnection