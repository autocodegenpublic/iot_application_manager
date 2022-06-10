
const mongoose = require('mongoose')

const temperature_sensor_monitoring_schema = new mongoose.Schema({

      unique_temp_sensor_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       deployment_id :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       deployment_date :{
      type :  Date ,
      required :  true ,
      unique :  false 
      },

       temp_sensor_in_degree_celcius :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       meta_data :{
      type :  {} ,
      required :  false ,
      unique :  false 
      },

   })

const temperature_sensor_monitoring_item = mongoose.model('temperature_sensor_monitoring_item',temperature_sensor_monitoring_schema);

module.exports = temperature_sensor_monitoring_item;