const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middlewares/auth');
const { getAllUsers, getAllJobs, deleteUser } = require('../controllers/adminController');

router.use(protect, restrictTo('admin'));

router.get('/users', getAllUsers);
router.get('/jobs', getAllJobs);
router.delete('/users/:id', deleteUser);

module.exports = router;
