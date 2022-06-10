


var express = require('express');
var apirouter = express.Router();
const {decodeAndAuthTokenJwtToken} = require('./../utils/auth');
var pollution_monitoringController = require('../ApiController/pollution_monitoring');

apirouter.post('/post_pollution_monitoring_data', decodeAndAuthTokenJwtToken, pollution_monitoringController.post_pollution_monitoring);

apirouter.get('/get_one_pollution_monitoring_data',decodeAndAuthTokenJwtToken, pollution_monitoringController.get_one_pollution_monitoring);

apirouter.get('/get_all_pollution_monitoring_data',decodeAndAuthTokenJwtToken, pollution_monitoringController.get_all_pollution_monitoring);

apirouter.patch('/update_one_pollution_monitoring_data',decodeAndAuthTokenJwtToken, pollution_monitoringController.update_one_pollution_monitoring);

apirouter.delete('/delete_one_pollution_monitoring_data',decodeAndAuthTokenJwtToken, pollution_monitoringController.delete_one_pollution_monitoring);

  

module.exports = apirouter;