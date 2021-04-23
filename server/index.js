import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import RoutesPath from './routes/routes.js'

const app = express()
app.use(express.json({extended: true}));  
app.use(express.urlencoded({extended: true})); 
app.use(cors())
app.use('/', RoutesPath)

const CONNECTION_URL = 'mongodb+srv://quizgenerator:6o9NtFHHmJoRrpu6@cluster0.ed9lk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false) 