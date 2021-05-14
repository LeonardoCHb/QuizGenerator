import express from 'express'

import auth from "../middleware/auth.js"
import { findUser, getUsers, deleteUser, updateUser, setAdm, findAdm } from '../controllers/AdmControllers.js'

const router = express.Router()

router.get('/findOne', findUser)
router.get('/findAll', getUsers)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

router.post('/setAdm', setAdm)
router.get('/findAdm',auth, findAdm)

export default router
