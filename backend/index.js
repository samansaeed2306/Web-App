const express = require('express')
// const colors = require('colors')
const dotenv = require('dotenv').config
const connectDB = require('./config/database')
const upload=require("express-fileupload")
app.use(upload())
connectDB()
const app = express()
const port = process.env.PORT || 5000
let cors = require("cors");
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))


 app.use('/',require('./Routes/userRoutes'))

//  app.use('/jobs',require('./Routes/jobRoutes'))

app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})