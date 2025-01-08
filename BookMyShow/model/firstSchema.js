const mongoose = require("mongoose");
const  schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      type: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: String,
        required: true,
        
      }
     
    });
const firstSchema = mongoose.model("Bookshow",schema);
module.exports = firstSchema;


//rate: {
  //   type: Number,
  //   required: true,
   
  // },
  // votes: {
  //   type: Number,
  //   required: true,
   
  // },
  // language: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // time: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // category: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // date: {
  //   type: String,
  //   required: true,
  // }
   // poster:{
      //   type:String,
      //   require:true,
      // }