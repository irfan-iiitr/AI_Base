const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    fname:{
        type: String,
        required: true,

    },
   
    lname:{
        type: String,
        required: true,

    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required: true,

    },
    id:{
        type:String
    }
})


const Users = mongoose.model('Users',userSchema);
module.exports = Users;