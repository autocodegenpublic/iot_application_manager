const pollution_monitoring_model = require("./../model/pollution_monitoring_model")

exports.post_pollution_monitoring = async(req,res) => {
    try
    {
        var object = {
                unique_pollution_sensor_id : req.body.unique_pollution_sensor_id,
                pollution_sens_deployment_id : req.body.pollution_sens_deployment_id,
                pollution_sensor_value : req.body.pollution_sensor_value,
                pollution_sensor_meta_data : req.body.pollution_sensor_meta_data,
                }
        await pollution_monitoring_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_pollution_monitoring = async (req,res) => {
    try
    {
        var filter = {
                unique_pollution_sensor_id : req.query.unique_pollution_sensor_id,
                }
        var returnObject = {
                }
        var result = await pollution_monitoring_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_pollution_monitoring = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await pollution_monitoring_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_pollution_monitoring = async (req,res) => {
    try
    {
        var filter = {unique_pollution_sensor_id : req.query.unique_pollution_sensor_id}
      
        var object = {
                pollution_sens_deployment_id : req.body.pollution_sens_deployment_id,
                pollution_sensor_value : req.body.pollution_sensor_value,
                pollution_sensor_meta_data : req.body.pollution_sensor_meta_data,
              
        }
        await pollution_monitoring_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_pollution_monitoring = async (req,res) => {
    try
    {
        var filter = {unique_pollution_sensor_id : req.query.unique_pollution_sensor_id}
        await pollution_monitoring_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   
