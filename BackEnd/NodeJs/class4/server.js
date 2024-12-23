const express = require('express')
const app = express()
require("dotenv").config 
app.use(express.json())
const userRoutes = require("./routes/useRoutes")
const { connection } = require('./config/db')


//connection to db

connection()

//routes
app.use('/users',userRoutes)


const port =process.env.PORT || 8000
app.get("/", (req, res) => {
    res.status(201).send({ msg: "Its working" });
  });

  app.listen(port , ()=>{
console.log(`server is listening at port ${port}`)
  })


