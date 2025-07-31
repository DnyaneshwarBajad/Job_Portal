const Application = require('../models/Application');
const Job = require('../models/Job');
const User = require('../models/User'); 
const sendEmail = require('../utils/email');




exports.applyToJob=async(req,res)=>{
    try{
        const jobId = req.params.jobId;

        const job=await Job.findById(jobId)
        if(!job) return res.status(404).json({ message: 'Job not found' });

        if(job.expiresAt && new Date(job.expiresAt)<new Date()){
           return res.status(400).json({ message: 'Job has expired' });
        }
        const existing = await Application.findOne({ job: jobId, applicant: req.user.id });
        if (existing) return res.status(400).json({ message: 'Already applied to this job' });
        
        
   
        const application=await Application.create({
            job:jobId,
            applicant:req.user.id,
            resume:req.body.resume||'',
            coverLetter: req.body.coverLetter || '',
            
        })
          const employer = await User.findById(job.createdBy);
    const applicant = await User.findById(req.user.id); 
        await sendEmail(
          employer.email,
           `📬 New Application for ${job.title}`,
  `Hello ${employer.name},\n\n${req.user.name} has applied to your job: ${job.title}.\n\nLogin to view applications.`
        )


        // Notify Admin
await sendEmail(
  'admin@example.com',  // Replace with real admin email
  `📢 New Job Application Submitted`,
  `${applicant.name} has applied to the job '${job.title}' posted by ${employer.name}.\n\nReview application details in the dashboard.`
);


         res.status(201).json(application);
    }catch (err) {
    res.status(500).json({ message: err.message });
  }
}


exports.getMyApplications = async (req, res) => {
  try {
    const apps = await Application.find({ applicant: req.user.id })
      .populate('job');
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getApplicantsForJob = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.jobId, createdBy: req.user.id });
    if (!job) return res.status(403).json({ message: 'Not authorized to view applicants' });

    const applicants = await Application.find({ job: req.params.jobId })
      .populate('applicant', 'name email');

    res.json(applicants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateApplicationStatus=async(req,res)=>{
  try{
    const{id}=req.params;
    const{status}=req.body;

    if(!['accepted','rejected'].includes(status)){
      return res.status(400).json({message:'Invalid status value'})

    }
    const application=await Application.findById(id).populate('job')
   
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
     // Make sure only the job owner (employer) can update
     if(application.job.createdBy.toString()!==req.user.id){
       return res.status(403).json({ message: 'Unauthorized' });
     }
      application.status = status;
    await application.save();
    const applicant = await User.findById(application.applicant);
    await sendEmail(
  applicant.email,
  `📝 Application ${status.toUpperCase()} – ${application.job.title}`,
  `Hello ${applicant.name},\n\nYour application for '${application.job.title}' was ${status}.\n\nThank you for applying.`
);
    res.json({ message: `Application ${status}`, application });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}