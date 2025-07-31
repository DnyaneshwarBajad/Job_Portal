const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
     title: { type: String, required: true },
  description: String,
  company: String,
  location: String,
  jobType: { type: String, enum: ['Full-Time', 'Part-Time', 'Remote',"Internship"], default: 'full-time' },
  
  salary: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  expiresAt: {
  type: Date,
  required: true
}

},{timestamps:true})



module.exports = mongoose.model('Job', jobSchema);