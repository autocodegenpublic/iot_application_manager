const user_item = require("./../model/user_model");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

exports.signup = async (req, res) =>{
try{
    var email = req.body.email;
    console.log(email);
    const userTaken = await validateEmail(email);
    if(userTaken) {
        return res.status(400).json({
            email: "Email is already taken",
            message: "Registration failure",
            success: false,
        });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 16);
    var userObject = {
        email : email,
        userName : req.body.userName,
        password :hashedPassword,

    }
    var result = await user_item.create(userObject);
    return res.status(201).send({
        message: "Account successfully created",
        success: true,
    });
}
catch (err) {
    return res.status(500).send({
        message: err.message,
        success: false,
    });
}
}


exports.login = async (req,res) =>{
    try { 
        var email = req.body.email;
        var password = req.body.password;
        const user = await user_item.findOne({ email });
        console.log(user);
        if(!user) {
            return res.status(404).json({
                message: "Failed login attempt",
                email: "Incorrect email",
                success: false,
            })
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if(isMatch) {
            let payload = {
                user_id: user._id,
                email: user.email,
                name: user.userName,
            }
            
            var token = await createJWT(payload);

            let profile = {
                email: user.email,
                name: user.userName,
            };
            let result = {
                user: profile,
                token: token,
            };
            return res.status(200).json({
                ...result,
                message: "success",
                success: true
            });
        }
        else {
            return res.status(403).json({
                message: "Failed login attempt",
                email: "Incorrect password",
                success: false
            })
        }
    }
    catch (err) {
        return res.status(500).send({
            message: err.message,
            success: false,
        });
    }
}

const validateEmail = async (email) => {
    let user = await user_item.findOne({ email });
    if(user) {
        return true;
    } else {
        return false;
    }
};