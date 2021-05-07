// import  mongoose  from "mongoose"
import quizModel from "../models/quizModels.js"

// Acha um usuario
export const findQuiz = async (req, res) => {
    const {creator} = req.body
    console.log({ creator })

    try {
        const userQuizzes = await quizModel.find({creator}).exec()
        console.log(userQuizzes)
        res.status(200).json(userQuizzes)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

}
export const getQuiz = async (req, res) => {
    try {
        const Quizs = await quizModel.find().exec()
        console.log(Quizs)
        res.status(200).json(Quizs)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

}

export const createQuiz = async (req, res) => {
    const QuizData = req.body
   
    const newQuiz = new quizModel({...QuizData, name: req.userId, createdAt: new Date().toISOString() })
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

    const { Quizname, name, password} = req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Nao ha nenhum usuario com esse id`)
    }

    let updatedData = {}
    if(Quizname != null)
        updatedData['Quizname'] = Quizname
    if(name != null)
        updatedData['name'] = name
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