require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const adminroutes=require('./routes/adminRoutes')
const app = express();
app.use(cors());
app.use(express.json());



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/admin', adminroutes);


// Welcome route
app.get('/', (req, res) => res.send('Job Portal Backend Running 🚀'));

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT||5000,()=>{
        console.log('mongo connected')
        console.log(`Server running on port ${process.env.PORT}`);
    })
}) .catch(err => console.error('MongoDB connection failed:', err));