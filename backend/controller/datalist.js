const Lists= require('../models/Toolslist');


const getList=  async(req, res)=>{
  const data = await Lists.find({});
  res.status(200).json({data});
}

module.exports= getList; 