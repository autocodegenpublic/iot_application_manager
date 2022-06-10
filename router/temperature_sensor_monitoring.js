


var express = require('express');
var apirouter = express.Router();
const {decodeAndAuthTokenJwtToken} = require('./../utils/auth');
var temperature_sensor_monitoringController = require('../ApiController/temperature_sensor_monitoring');

apirouter.post('/post_temperature_sensor_monitoring_data', decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.post_temperature_sensor_monitoring);

apirouter.get('/get_one_temperature_sensor_monitoring_data',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.get_one_temperature_sensor_monitoring);

apirouter.get('/get_all_temperature_sensor_monitoring_data',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.get_all_temperature_sensor_monitoring);

apirouter.patch('/update_one_temperature_sensor_monitoring_data',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.update_one_temperature_sensor_monitoring);

apirouter.delete('/delete_one_temperature_sensor_monitoring_data',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.delete_one_temperature_sensor_monitoring);

  
apirouter.patch('/update_one_meta_data_by_unique_temp_sensor_id',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.update_one_meta_data_by_unique_temp_sensor_id);


apirouter.get('/get_one_meta_data_by_unique_temp_sensor_id',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.get_one_meta_data_by_unique_temp_sensor_id);
      
  
apirouter.get('/get_count_of_deployment_id',decodeAndAuthTokenJwtToken, temperature_sensor_monitoringController.get_count_of_deployment_id);



module.exports = apirouter;