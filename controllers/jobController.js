const Job=require('../models/Job')

exports.createJob=async(req,res)=>{
    try{
        const job= await Job.create({...req.body,createdBy:req.user.id})
         res.status(201).json(job);
    }catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.getAllJobs=async(req,res)=>{
    try{
        const {location,jobType,keyword,company,page=1,limit=10}=req.query;

        const query={};

        if(location)query.location={ $regex: location, $options: 'i'}
        if (jobType) query.jobType = jobType;
        if (keyword) query.title = { $regex: keyword, $options: 'i' };
        if (company) query.company = { $regex: company, $options: 'i' };

        const total=await Job.countDocuments(query)
        const jobs = await Job.find(query)
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
       res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      jobs
    });
    
    }catch (err) {
    res.status(500).json({ message: err.message });
  }
}





exports.getMyJobs=async(req,res)=>{
    try{
        const jobs=await Job.find({createdBy:req.user.id})
        res.json(jobs);
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



exports.updateJob = async (req, res) => {
    try{
        const job=await Job.findOneAndUpdate({
            _id:req.params.id,createdBy:req.user.id
        },req.body,{new:true})
        if (!job) return res.status(404).json({ message: 'Job not found or unauthorized' });
    res.json(job);
    }catch (err) {
    res.status(500).json({ message: err.message });
  }
    
}



exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });

    if (!job) return res.status(404).json({ message: 'Job not found or unauthorized' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};