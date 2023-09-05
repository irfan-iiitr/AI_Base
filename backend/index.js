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

const bcrypt = require('bcryptjs');   //npm bycrpyt search
const jwt = require('jsonwebtoken');

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");   //earlier it was 3000 for npx create react app
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json());
// app.use('/api/', require("./Routes/CreateUser"));
// app.use("/api/", require("./Routes/DisplayData"));

//connect to mongodb///import schema files
const list= require('../backend/models/Toolslist')
const Users= require('../backend/models/Users')

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


app.post('/api/register', async (req, res,next)=> {
  try{
      const {fname,lname,email, password} =req.body;

      if(!fname || !email || !password)
      {
          res.status(400).send("Input field is required");
      }
      else{
          const userExits =await Users.findOne({email});
          if(userExits)
          res.status(400).send("User already exists");
          else{

              const newUser = new Users({fname,lname,email});
              bcrypt.hash(password,10,(err,hashedPassword)=>{
                  newUser.set('password',hashedPassword);
                  newUser.save();
                  next();
              })

              return res.status(200).json({success:true});
          }
       
      }
  }
  catch(error){
      res.json({success:false, error:error})

  }
});


//................................................................

app.post('/api/login',async(req,res,next)=>{
  try{
      const {email,password}=req.body;

      if(!email || !password)
       res.status(400).send("Enter the field");
      else{
 const user = await Users.findOne({email});
        if(!user)
        {
            res.status(400).send("Email NOT Found");
        }
        else{
            const validateUser = await bcrypt.compare(password,user.password);
            if(!validateUser)
            res.status(400).send("Invalid password");
            else{
                const payload ={
                    userId:user._id,
                    email:user.email

                }
                const JWT_KEY = process.env.JWT_KEY || 'THIS_IS_A_SECRET_KEY';
               console.log(user._id);
               const authToken = jwt.sign(payload, JWT_KEY)
     
               
                     
                    user.save();
                    
                    return  res.status(200).json({user:{id:user._id ,email:user.email,fname:user.fname},token:authToken})
                   
               
               
            }
        }
      }
}
catch(error)
{
    console.log(error);
}
})


//................................................................

app.get('/api/:category',async(req,res)=>{
  try{
      const categoryId = req.params.category;
      //console.log(categoryId);

      if(categoryId ==='new') return res.status(200).json([]);

      const messages = await list.find({category:{$regex:categoryId}});
   
      res.status(200).json(messages);
  }
  catch(error)
  {
      console.log('error: ' + error);
  }

})



//................................................................
  

app.get('/', (req, res) => {
  res.send('Hello World! I am Irfan!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})