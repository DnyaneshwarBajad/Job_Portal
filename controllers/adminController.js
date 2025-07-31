const User = require('../models/User');
const Job = require('../models/Job');


exports.getAllUsers=async(req,res)=>{
    try{
        const user=await User.find().select('-password');
        res.json(user)

    }catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('createdBy', 'name email');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteUser=async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
    }catch (err) {
    res.status(500).json({ message: err.message });
  }
}