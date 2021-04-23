import express from 'express'

import { findUser, getUsers, deleteUser, updateUser,createUser } from '../controllers/UserControllers.js'

import {/* findQuiz, getQuiz, updateQuiz, deleteQuiz, */ createQuiz} from '../controllers/QuizControllers.js'

const router = express.Router()

router.get('/user/findOne', findUser)
router.get('/user/findAll', getUsers)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
router.post('/user', createUser)

/* router.get('/quiz/findOne', findQuiz)
router.get('/quiz/findAll', getQuiz)
router.patch('/quiz/:id', updateQuiz)
router.delete('/quiz/:id', deleteQuiz) */
router.post('/quiz', createQuiz)

export default router
