const mongoose = require("mongoose")

require("dotenv").config()

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    age :{
        type: Number,
        required: true
    },
    regd:{
        type: Number,
        required : true
    }
}, {timestamps: true})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel