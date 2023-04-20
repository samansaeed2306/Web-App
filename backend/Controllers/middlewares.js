let DecodeUser = (req , res , next)=>{
    let token = req.body.token;
     
    jwt.verify(token , process.env.SECRET_KEY , (err , decoded)=>{
        if(!err){
            
            req.decoded = decoded;
            
            next();
        }else{
            res.status(403).json({token:token, message:"Not Authorized"})
        }
    }
    )
}

let CheckIfEmployer = (req , res , next)=>{
    
    if(req.decoded.role == "Employer"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Employer"})
    }
}


let CheckIfStudent = (req , res , next)=>{
    
    if(req.decoded.role == "student"){
        next();
    }else{
        res.status(403).json({"Message":"Not Authorized as Student"})
    }
}

module.exports = {
    CheckIfStudent,
    CheckIfEmployer,
    DecodeUser
}