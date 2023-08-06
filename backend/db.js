const express = require('express');
const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://aitools:irfan123@cluster0.1w1dr3f.mongodb.net/listdb?retryWrites=true&w=majority'

//install mongodb mongose express nodemon
//for nodeon in vite remove module in packagejson
//remove <> in username password
//?after this your databse naeme
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB..at last");
    //const collection = mongoose.connection.db.collection("aitools");
    
    // collection.find({}).toArray(async function (err, data) {
    //     const foodCategory = await mongoose.connection.db.collection("foodcategory");
    //     foodCategory.find({}).toArray(function (err, catData) {
    //        if(err) console.log(err);
    //        else
    //        {
    //         global.food_items=data;
    //         global.foodCategory=catData;
    //        }
          
    //   })

    // })
    

}
  catch(err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
module.exports = connectToMongoDB;
