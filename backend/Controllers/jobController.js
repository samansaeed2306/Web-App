const jobModel = require("../Models/jobModel")
// const jwt = require("jsonwebtoken")
const jobs = require("../Models/jobModel")
const CircularJSON = require('circular-json');

//user signup
let addJob = (req , res)=>{
    let {title , description , salary, required_Qualification} = req.body;

    let Newjob = new jobModel({
        title,
        description,
        salary,
        required_Qualification,
    })

   
            Newjob.save().then((job)=>{
        res.status(200).json({"Message":"Job Created" , job:job})
    }).catch(err=>{
        res.status(500).json({"Message":"Job Not Created" , err:err})
    })
}


let viewJob = async(req , res)=>{
    
    const alljobs=await jobs.find();
    res.send(alljobs);
}

let searchJob = async(req , res)=>{
   
    const job = await jobs.find({title:req.body.title})
       
    res.status(200).json(job)
    // SharedWorker.status(200).json(job)
}



module.exports = {
    addJob,
    viewJob,
    searchJob
}