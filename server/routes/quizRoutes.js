import express from 'express'

import { findQuiz,
findAllQuizzes,
replyQuiz,
findAllCreatorQuizzes,
findAllUserResponses,
createQuiz} from '../controllers/QuizControllers.js'
import auth from "../middleware/auth.js"

const router = express.Router()

router.get('/findOne/:id', findQuiz)
router.get('/findAll', findAllQuizzes)
router.get('/findAllCreatorQuizzes', auth, findAllCreatorQuizzes)
// router.patch('/quiz/:id', updateQuiz)
// router.delete('/quiz/:id', deleteQuiz)
router.get('/findAllUserResponses', auth, findAllUserResponses)
router.post('/create', auth, createQuiz)
router.post('/reply', replyQuiz)

export default router
