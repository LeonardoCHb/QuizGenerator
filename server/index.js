import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import register from './routes/registerRoutes.js'
import adm from './routes/admRoutes.js'
import quiz from './routes/quizRoutes.js'

const app = express()
app.use(express.json({extended: true}));  
app.use(express.urlencoded({extended: true})); 
app.use(cors())


app.use("/auth", register)
app.use("/adm", adm)
app.use("/quiz", quiz)

const CONNECTION_URL = 'mongodb+srv://quizgenerator:6o9NtFHHmJoRrpu6@cluster0.ed9lk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false) 