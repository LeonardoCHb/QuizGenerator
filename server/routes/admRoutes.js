import express from 'express'

import { findUser, getUsers, deleteUser, updateUser } from '../controllers/UserControllers.js'

const router = express.Router()

router.get('/findOne', findUser)
router.get('/findAll', getUsers)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router
