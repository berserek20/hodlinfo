const data = require('.././data.json');
const mongoose=require('mongoose')
const axios = require('axios')
const {database} = require('../model/dataSchema')
// module.exports.inesertData= async(req,res)=>{
//    const resp = await database.insertMany(data);
//    console.log(resp);
//    res.send(resp);
// }
module.exports.getData= async(req,res)=>{
   const data = await axios.get('https://api.wazirx.com/api/v2/tickers');
    let arr=[];
   
   for(key in data.data){
      arr.push(data.data[key]);
   }
   const top = arr.slice(0,10);
   
   const resp = await database.insertMany(top);
   console.log(resp);
   res.json({response:resp,message:"i am working"})
   //  console.log(data);

 }