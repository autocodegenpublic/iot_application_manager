
const mongoose = require('mongoose')

const pollution_monitoring_schema = new mongoose.Schema({

      unique_pollution_sensor_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       pollution_sens_deployment_id :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       pollution_sensor_value :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       pollution_sensor_meta_data :{
      type :  {} ,
      required :  true ,
      unique :  false 
      },

   })

const pollution_monitoring_item = mongoose.model('pollution_monitoring_item',pollution_monitoring_schema);

module.exports = pollution_monitoring_item;