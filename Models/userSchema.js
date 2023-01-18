const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
         type: 'string',
         required: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
        unique: true,
    },
    work:{
        type: 'string',
        required: true,
        unique: true,
    },
    add:{
        type: 'string',
        required: true,
        unique: true,
    },
    description:{
        type: 'string',
        required: true,
        unique: true,
    }
}); //

const crudtest = new mongoose.model("crudtest",userSchema);
module.exports = crudtest;