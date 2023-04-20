const userModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken")
const users = require("../Models/UserModel")

//user signup
let signup = (req , res)=>{
    let {username , password , role } = req.body;

    let Newuser = new userModel({
        username,
        password,
        role,
    })

    userModel.findOne({username:username}).then((user)=>{
        if(user){
        res.status(300).json({"Message":"User Already Exists"})}
        else{    
            Newuser.save().then((user)=>{
        res.status(200).json({"Message":"User Created" , user:user})
    }).catch(err=>{
        res.status(500).json({"Message":"User Not Created" , err:err})
    })
}})
}


//user login
let login = (req , res)=>{
    let {username , password} = req.body;

    userModel.findOne({username:username}).then((user)=>{
        if(user.password == password){
            let token = jwt.sign({
                username:user.username,
                password:user.password,
                role: user.role} , 
                process.env.SECRET_KEY, {
                    expiresIn: "24h"
                }
                )
            res.status(200).json({"Message":"Login Succsessfull" , user:user, token})
        }else{
            res.status(500).json({"Message":"Login Not successful"})
        }
    }
    ).catch(err=>{
        res.status(500).json({"Message":"Login Failed" , err:err})
    }
    )
}

module.exports = {
    signup,
    login 
}