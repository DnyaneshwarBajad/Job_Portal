POST /api/auth/register
POST /api/auth/login
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2U1NTRjMjgxYjhhOTMzNDY2NjNhYSIsInJvbGUiOiJqb2JzZWVrZXIiLCJpYXQiOjE3NTMxMDk5MTEsImV4cCI6MTc1MzcxNDcxMX0.LQl8CWaewJmK7whVLXXvKGkF_pzBpC7QsvrqUY9x9DE",

 Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2U1NTRjMjgxYjhhOTMzNDY2NjNhYSIsInJvbGUiOiJqb2JzZWVrZXIiLCJpYXQiOjE3NTMxMDk5MTEsImV4cCI6MTc1MzcxNDcxMX0.LQl8CWaewJmK7whVLXXvKGkF_pzBpC7QsvrqUY9x9DE"


 GET /api/jobs → Public job list with pagination, filtering

POST /api/jobs → Create job (requires employer + token)

GET /api/jobs/mine → Employer can see only their jobs

PATCH /api/jobs/:id → Employer can update their job

DELETE /api/jobs/:id → Employer can delete their job


{
 
  "email": "dnyane@example.com",
  "password": "123456"
  
}

{
    "token":,
    "role": "jobseeker" Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2U2OGI1YzU0OGQyNWY1Y2M0NDVmYSIsInJvbGUiOiJqb2JzZWVrZXIiLCJpYXQiOjE3NTMxMTQ4NDcsImV4cCI6MTc1MzcxOTY0N30.mn60TKuQ0XS0ygKfhsNNruHt3gvaR0ksWYNh6YKGtZw"
}
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2U2OWI4YzU0OGQyNWY1Y2M0NDVmZiIsInJvbGUiOiJlbXBsb3llciIsImlhdCI6MTc1MzExNjA4NCwiZXhwIjoxNzUzNzIwODg0fQ.t4FFkPTqTg3bMxea-9S6pld7HxUhfkpb3bZYYPy_L5M




POST /api/applications/<jobId> — as jobseeker

GET /api/applications/my — list your applied jobs

GET /api/applications/job/<jobId> — as employer, view applicants

