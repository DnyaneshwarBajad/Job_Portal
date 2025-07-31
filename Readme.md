# 🧑‍💼 Job Portal Backend

This is the backend of a Job Portal web application built with **Node.js**, **Express**, and **MongoDB**. It supports features like user authentication, job creation, job applications, resume uploads, bookmarking jobs, and email notifications.

---

## 🚀 Features

- 🔐 User Registration & Login with JWT
- 👥 Role-based access (`user` & `employer`)
- 📝 Create, Read, Update, Delete Jobs (Employer only)
- 🔎 Filter, Search, and Paginate Jobs
- 📁 Apply to Jobs with Resume Upload
- ✅ Employers manage applicants (accept/reject)
- 💌 Email notifications (application + status)
- 📌 Bookmark Jobs
- 🧾 Get My Applications
- 🌐 API tested using Postman

---

## 🛠️ Tech Stack

| Tech        | Description                  |
|-------------|------------------------------|
| Node.js     | Backend runtime              |
| Express.js  | Web framework                |
| MongoDB     | NoSQL database               |
| Mongoose    | ODM for MongoDB              |
| JWT         | User Authentication          |
| Multer      | File uploads (resume)        |
| Nodemailer  | Email notifications          |
| Cloudinary  | (Optional) resume storage    |

---

## 📁 Project Structure


job-portal-backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── .env
├── app.js
└── server.js














