const temperature_sensor_monitoring_model = require("./../model/temperature_sensor_monitoring_model")

exports.post_temperature_sensor_monitoring = async(req,res) => {
    try
    {
        var object = {
                unique_temp_sensor_id : req.body.unique_temp_sensor_id,
                deployment_id : req.body.deployment_id,
                deployment_date : new Date(),
                temp_sensor_in_degree_celcius : req.body.temp_sensor_in_degree_celcius,
                meta_data : req.body.meta_data,
                }
        await temperature_sensor_monitoring_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_temperature_sensor_monitoring = async (req,res) => {
    try
    {
        var filter = {
                unique_temp_sensor_id : req.query.unique_temp_sensor_id,
                }
        var returnObject = {
                }
        var result = await temperature_sensor_monitoring_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_temperature_sensor_monitoring = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await temperature_sensor_monitoring_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_temperature_sensor_monitoring = async (req,res) => {
    try
    {
        var filter = {unique_temp_sensor_id : req.query.unique_temp_sensor_id}
      
        var object = {
                deployment_id : req.body.deployment_id,
                deployment_date : req.body.deployment_date,
                temp_sensor_in_degree_celcius : req.body.temp_sensor_in_degree_celcius,
                meta_data : req.body.meta_data,
              
        }
        await temperature_sensor_monitoring_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_temperature_sensor_monitoring = async (req,res) => {
    try
    {
        var filter = {unique_temp_sensor_id : req.query.unique_temp_sensor_id}
        await temperature_sensor_monitoring_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   exports.update_one_meta_data_by_unique_temp_sensor_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_temp_sensor_id : req.query.unique_temp_sensor_id,
            }

        var object = {
         meta_data : req.body.meta_data }
        
        var result = await temperature_sensor_monitoring_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.get_one_meta_data_by_unique_temp_sensor_id = async(req,res)=>{   
    try
    {
        var filter = {  
            unique_temp_sensor_id : req.query.unique_temp_sensor_id,
            }

        var returnObject = {
         meta_data : 1 }
        
        var result = await temperature_sensor_monitoring_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }
   
     exports.get_count_of_deployment_id = async(req,res)=>{ 
    try
    {
        var filter = {deployment_id :req.query.deployment_id }
        
        var result = await temperature_sensor_monitoring_model.countDocuments(filter);
        
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  
