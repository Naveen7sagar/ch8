import express from 'express'
const app  = express();
const port = process.env.PORT || '3000';

import student from './routes/student.js'

//load
// app.use('/student',student) //localhot:3000/student/student/all
app.use('/',student)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})