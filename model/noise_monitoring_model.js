
const mongoose = require('mongoose')

const noise_monitoring_schema = new mongoose.Schema({

      unique_noise_sensor_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       noise_sensor_deployment_id :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       noise_sensor_deployment_date :{
      type :  Date ,
      required :  true ,
      unique :  false 
      },

       noise_sensor_level_in_db :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       noise_sensor_meta_data :{
      type :  {} ,
      required :  false ,
      unique :  false 
      },

   })

const noise_monitoring_item = mongoose.model('noise_monitoring_item',noise_monitoring_schema);

module.exports = noise_monitoring_item;