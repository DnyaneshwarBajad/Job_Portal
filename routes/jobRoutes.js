const express = require('express');
const router = express.Router();


const {
  createJob,
  getAllJobs,
  getMyJobs,
  updateJob,
  deleteJob
} = require('../controllers/jobController');

const { protect, restrictTo } = require('../middlewares/auth');


// 👨‍💼 Only Employers can post jobs
router.post('/', protect, restrictTo('employer'), createJob);

// 🌍 Public: anyone can search and browse jobs (with filters & pagination)
router.get('/', getAllJobs);

// 👨‍💼 Only Employers: fetch jobs created by themselves
router.get('/mine', protect, restrictTo('employer'), getMyJobs);

// ✏️ Only Employers can update their own jobs
router.patch('/:id', protect, restrictTo('employer'), updateJob);


// ❌ Only Employers can delete their own jobs
router.delete('/:id', protect, restrictTo('employer'), deleteJob);

module.exports = router;