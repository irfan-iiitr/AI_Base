const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors=require("cors");

const { MongoClient } = require('mongodb');

const bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
mongoDB(); // call the function to connect to the database



// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");   //earlier it was 3000 for npx create react app
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json());
// app.use('/api/', require("./Routes/CreateUser"));
// app.use("/api/", require("./Routes/DisplayData"));

//connect to mongodb
const list= require('../backend/models/Toolslist')

app.post('/admin' , async(req, res) => {
  const { name,
    description,
    date,
    imglink,
    productlink,
    authorname,
    category
  } = req.body;

  // console.log(description)

try{
  const data= new list({ name, description,date,  imglink, productlink, authorname,category});
  data.save();
 
  return res.status(200).json({success: true});
}
catch (err) {
  res.json({success:false, error:err});
}
});

// ----------------------------------------------------------------

const list_routes= require('./routes/datalists');

app.use('/api', list_routes);







//----------------------------------------------------------------



app.get('/', (req, res) => {
  res.send('Hello World! I am Irfan!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})