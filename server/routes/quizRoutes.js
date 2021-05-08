import express from 'express'

import { findQuiz , findAllQuizzes,  replyQuiz, findAllCreatorQuizzes,/* deleteQuiz, */ createQuiz} from '../controllers/QuizControllers.js'
import auth from "../middleware/auth.js"

const router = express.Router()

router.get('/findOne/:id', findQuiz)
router.get('/findAll', findAllQuizzes)
router.get('/findAllCreatorQuizzes', findAllCreatorQuizzes)
// router.patch('/quiz/:id', updateQuiz)
// router.delete('/quiz/:id', deleteQuiz)
router.post('/create', auth, createQuiz)
router.post('/reply', replyQuiz)

export default router
