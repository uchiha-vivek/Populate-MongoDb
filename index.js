const express = require('express')

const bodyParser =  require('body-parser')

const dbConnection = require('./db/conn.js')

const app= express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT =7000
dbConnection()

app.use(require('./routes/route.js'))

const server = function(){
    app.listen(PORT, () =>{
        console.log(`App is running on PORT ${PORT}`)
    })
}

server()