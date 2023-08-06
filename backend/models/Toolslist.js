const mongoose = require('mongoose')

const {Schema} = mongoose;

const ailist = new Schema({
    name:{
        type: String,
        // required: true
    },
    description:{
        type: String,
        // required: true
    },
    date:{
        type: Date
    },
    imglink:{
        type: String,
        // required: true
    },
    productlink:{
        type: String,
        // required: true
    },
    authorname:{
        type: String,
        // required: true
    }
});




const Toolslist = mongoose.model('Toolslist',ailist);
module.exports = Toolslist;
