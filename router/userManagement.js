var express = require('express');
var apirouter = express.Router();
var userManagementController = require('../ApiController/userManagement');

apirouter.post('/signup',userManagementController.signup);
apirouter.post('/login',userManagementController.login);

module.exports = apirouter;