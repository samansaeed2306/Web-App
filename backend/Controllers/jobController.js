const jobModel = require("../Models/jobModel")
// const jwt = require("jsonwebtoken")
const jobs = require("../Models/jobModel")
const CircularJSON = require('circular-json');
const upload=require("express-fileupload")

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
let attachResume = (req, res) => {
    console.log(req.files)
    let file = req.files.file;
    let asd = req.files.asd;
    file.mv(".\\Assignment3\\backend"+file.name, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let imageUrl = `http://localhost:5000/${file.name}`;
        res.status(200).send({ imageUrl });
      }
    })
  }
  
// let attachResume = (req , res)=>{
//     console.log(req.files)
//     let file=req.files.file;
//     let asd = req.files.asd;
//     file.mv(".\\Assignment3\\backend"+file.name,(err)=>{
//         res.send(err)
//     })
//     image=file.name;
//     res.send({"file uploaded":"ASD"})}

    



module.exports = {
    addJob,
    viewJob,
    searchJob,
    attachResume
}