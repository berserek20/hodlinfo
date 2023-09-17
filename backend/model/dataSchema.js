const { default: mongoose } = require("mongoose");
// const {dbconnect}=require("../database/database");
const {datadb}=require("../database/database");

// const dbase =dbconnect();

const chartSchema = new mongoose.Schema({
    
    name:String, 
    last:String, 
    buy:String, 
    sell:String, 
    volume:String, 
    base_unit: String
    
})
  
// module.exports.database = dbase.model("Chart", chartSchema)

module.exports.database = datadb.model("Chart", chartSchema)