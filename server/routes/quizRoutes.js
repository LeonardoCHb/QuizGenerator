import express from 'express'

import { findQuiz , getQuiz,  /*updateQuiz, deleteQuiz, */ createQuiz} from '../controllers/QuizControllers.js'
import auth from "../middleware/auth.js"

const router = express.Router()

router.get('/findOne', findQuiz)
router.get('/findAll', getQuiz)
// router.patch('/quiz/:id', updateQuiz)
// router.delete('/quiz/:id', deleteQuiz)
router.post('/create', auth, createQuiz)

export default router
