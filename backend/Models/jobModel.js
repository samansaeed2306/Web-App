const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: { 
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,    
    },
    required_Qualification: {
        type: String,
        required: true,    
    },
});


module.exports = mongoose.model("jobModel", jobSchema)