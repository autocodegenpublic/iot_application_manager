const mongoose = require('mongoose')
const user_schema = new mongoose.Schema({

    email :{
    type :  String ,
    required :  true ,
    unique :  true 
    },

    userName :{
    type :  String ,
    required :  false ,
    unique :  false 
    },

    password :{
    type :  String ,
    required :  true ,
    unique :  false 
    },

    passwordResetCode: {
    type: String,
    required :  false ,
    unique :  false 
    } 
  
   })

   const user_item = mongoose.model('user_item',user_schema);

   module.exports = user_item;