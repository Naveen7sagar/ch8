import express from 'express'
const router = express.Router();
import {allStudent,deleteStudent} from '../Controllers/studentController.js'



router.get('/student/all',allStudent)
router.get('/student/delete/:id([0-9]{2})',deleteStudent)
export default router