const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middlewares/auth');
const {
  applyToJob,
  getMyApplications,
  getApplicantsForJob,
  updateApplicationStatus
} = require('../controllers/applicationController');
const upload = require('../middlewares/upload');
// Job Seeker applies to a job
router.post('/:jobId', protect, restrictTo('jobseeker'), applyToJob);

// Job Seeker views their applications
router.get('/my', protect, restrictTo('jobseeker'), getMyApplications);
router.post('/jobs/:jobId', protect, restrictTo('seeker'), upload.single('resume'), applyToJob);
// Employer views applicants for a job they posted
router.get('/job/:jobId', protect, restrictTo('employer'), getApplicantsForJob);
router.patch('/status/:id', protect, restrictTo('employer'), updateApplicationStatus);

module.exports = router;
