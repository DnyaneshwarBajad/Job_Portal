const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');


const storage=new CloudinaryStorage({
    cloudinary,params:{
        folder:'resumes',
        allowed_formats:['pdf','doc','docx'],
        resource_type:'raw'
    }
})
const upload = multer({ storage });

module.exports = upload;