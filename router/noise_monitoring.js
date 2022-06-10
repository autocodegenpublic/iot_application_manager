


var express = require('express');
var apirouter = express.Router();
const {decodeAndAuthTokenJwtToken} = require('./../utils/auth');
var noise_monitoringController = require('../ApiController/noise_monitoring');

apirouter.post('/post_noise_monitoring_data', decodeAndAuthTokenJwtToken, noise_monitoringController.post_noise_monitoring);

apirouter.get('/get_one_noise_monitoring_data',decodeAndAuthTokenJwtToken, noise_monitoringController.get_one_noise_monitoring);

apirouter.get('/get_all_noise_monitoring_data',decodeAndAuthTokenJwtToken, noise_monitoringController.get_all_noise_monitoring);

apirouter.patch('/update_one_noise_monitoring_data',decodeAndAuthTokenJwtToken, noise_monitoringController.update_one_noise_monitoring);

apirouter.delete('/delete_one_noise_monitoring_data',decodeAndAuthTokenJwtToken, noise_monitoringController.delete_one_noise_monitoring);

  
apirouter.patch('/update_one_noise_sensor_meta_data_by_unique_noise_sensor_id',decodeAndAuthTokenJwtToken, noise_monitoringController.update_one_noise_sensor_meta_data_by_unique_noise_sensor_id);


apirouter.get('/get_one_noise_sensor_meta_data_by_unique_noise_sensor_id',decodeAndAuthTokenJwtToken, noise_monitoringController.get_one_noise_sensor_meta_data_by_unique_noise_sensor_id);
      
  

module.exports = apirouter;