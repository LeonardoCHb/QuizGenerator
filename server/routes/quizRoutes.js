import express from 'express'

import { findQuiz,
findAllQuizzes,
replyQuiz,
findAllCreatorQuizzes,
findAllUserResponses,
findAllQuizResponses,
deleteQuiz,
findOneResponse,
createQuiz} from '../controllers/QuizControllers.js'
import auth from "../middleware/auth.js"

const router = express.Router()

router.get('/findOne/:id', findQuiz)
router.get('/findAll', findAllQuizzes)
router.get('/findAllCreatorQuizzes', auth, findAllCreatorQuizzes)
router.delete('/deleteQuiz/:id', deleteQuiz)
router.get('/findAllQuizResponses/:id', auth, findAllQuizResponses)
router.get('/findAllUserResponses', auth, findAllUserResponses)
router.get('/findOneResponse/:id', auth, findOneResponse)
router.post('/create', auth, createQuiz)
router.post('/reply', replyQuiz)

export default router
