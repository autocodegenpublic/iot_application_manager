const noise_monitoring_model = require("./../model/noise_monitoring_model")

exports.post_noise_monitoring = async(req,res) => {
    try
    {
        var object = {
                unique_noise_sensor_id : req.body.unique_noise_sensor_id,
                noise_sensor_deployment_id : req.body.noise_sensor_deployment_id,
                noise_sensor_deployment_date : req.body.noise_sensor_deployment_date,
                noise_sensor_level_in_db : req.body.noise_sensor_level_in_db,
                noise_sensor_meta_data : req.body.noise_sensor_meta_data,
                }
        await noise_monitoring_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_noise_monitoring = async (req,res) => {
    try
    {
        var filter = {
                unique_noise_sensor_id : req.query.unique_noise_sensor_id,
                }
        var returnObject = {
                }
        var result = await noise_monitoring_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_noise_monitoring = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await noise_monitoring_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_noise_monitoring = async (req,res) => {
    try
    {
        var filter = {unique_noise_sensor_id : req.query.unique_noise_sensor_id}
      
        var object = {
                noise_sensor_deployment_id : req.body.noise_sensor_deployment_id,
                noise_sensor_deployment_date : req.body.noise_sensor_deployment_date,
                noise_sensor_level_in_db : req.body.noise_sensor_level_in_db,
                noise_sensor_meta_data : req.body.noise_sensor_meta_data,
              
        }
        await noise_monitoring_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_noise_monitoring = async (req,res) => {
    try
    {
        var filter = {unique_noise_sensor_id : req.query.unique_noise_sensor_id}
        await noise_monitoring_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   exports.update_one_noise_sensor_meta_data_by_unique_noise_sensor_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_noise_sensor_id : req.query.unique_noise_sensor_id,
            }

        var object = {
         noise_sensor_meta_data : req.body.noise_sensor_meta_data }
        
        var result = await noise_monitoring_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.get_one_noise_sensor_meta_data_by_unique_noise_sensor_id = async(req,res)=>{   
    try
    {
        var filter = {  
            unique_noise_sensor_id : req.query.unique_noise_sensor_id,
            }

        var returnObject = {
         noise_sensor_meta_data : 1 }
        
        var result = await noise_monitoring_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }
   
     
