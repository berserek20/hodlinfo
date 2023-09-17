const mongoose = require('mongoose');
const password = "V9hXnXJUZcuZppId";
const username = "chart";
const url=`mongodb+srv://${username}:${password}@cluster0.xyxflmu.mongodb.net/`;
// module.exports.dbconnect=async()=>{
    // try{

        module.exports.datadb = mongoose.createConnection(url)
        // .then(()=>{
        //     console.log(datadb);

        // })
        // return datadb;
    // }catch(error){
    //     console.log(error)
    // }
// })
