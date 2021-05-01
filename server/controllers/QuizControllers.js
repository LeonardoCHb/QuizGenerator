//import  mongoose  from "mongoose"
import quizModel from "../models/quizModels.js"

// Acha um usuario
/* export const findQuiz = async (req, res) => {
    const loginData = req.body
    const email = loginData.email
    console.log(email)

    try {
        const quizModel = await quizModel.findOne({email}).exec()
        res.status(200).json(quizModel)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

}

export const getQuizs = async (req, res) => {
    try {
        const quizModel = await quizModel.find()
        //console.log(quizModel)
        res.status(200).json(quizModel)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

} */

export const createQuiz = async (req, res) => {
    const QuizData = req.body
   
    const newQuiz = new quizModel({...QuizData, creator: req.userId, createdAt: new Date().toISOString() })
    console.log(newQuiz)
    try {
        await newQuiz.save()

        res.status(201).json(newQuiz)
    } catch(error) {
        res.status(409).json({message: error.message})
    }

}

/* export const updateQuiz = async (req, res) => {
    const {id} = req.params

    const { Quizname, email, password} = req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Nao ha nenhum usuario com esse id`)
    }

    let updatedData = {}
    if(Quizname != null)
        updatedData['Quizname'] = Quizname
    if(email != null)
        updatedData['email'] = email
    if(password != null)
        updatedData['password'] = password

    updatedData[id] == id
    

    await quizModel.findByIdAndUpdate(id,updatedData, {new: true})

    res.json(updatedData)
    console.log('USUARIO ATUALIZADO')
}

export const deleteQuiz = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Nao ha nenhum usuario com esse id`)
    }
    
    await quizModel.findByIdAndRemove(id)

    res.json({message: `O usuario com id ${id} foi deleteado`})

} */