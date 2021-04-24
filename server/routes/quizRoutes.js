import express from 'express'

import {/* findQuiz, getQuiz, updateQuiz, deleteQuiz, */ createQuiz} from '../controllers/QuizControllers.js'

const router = express.Router()

/* router.get('/quiz/findOne', findQuiz)
router.get('/quiz/findAll', getQuiz)
router.patch('/quiz/:id', updateQuiz)
router.delete('/quiz/:id', deleteQuiz) */
router.post('/quiz', createQuiz)

export default router