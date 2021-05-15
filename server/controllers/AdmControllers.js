import  mongoose  from "mongoose"
import userModel from "../models/userModels.js"
import admModel from "../models/admModels.js"
import responseModel from "../models/responseModels.js"

export const setAdm = async (req, res) => {
    const AdmData = req.body
    const newAdm = new admModel({...AdmData})

    try {
        await newAdm.save()

        res.status(201).json(newAdm)
    } catch(error) {
        res.status(409).json({message: error.message})
    }
}

export const findAdm = async (req, res) => {
    const id = req.userId
    console.log(id)

    try {
        const AdmModel = await admModel.findOne({id}).exec()
        res.status(200).json(AdmModel)
    } catch(error) {
        res.status(404).json({ERRO: 'Usuario invalido!'})
    }

}

// Acha um usuario
export const findUser = async (req, res) => {
    const {email} = req.body
    console.log({email})

    try {
        const UserModel = await userModel.findOne({email}).exec()
        console.log(UserModel)
        res.status(200).json(UserModel)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

}

export const getUsers = async (req, res) => {
    try {
        const UserModel = await userModel.find()
        //console.log(UserModel)
        res.status(200).json(UserModel)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

}

export const getUsersResponses = async (req, res) => {
    try {
        const ResponseModel = await responseModel.find()
        //console.log(UserModel)
        res.status(200).json(ResponseModel)
    } catch(error) {
        res.status(404).json({ERRO: 'Esse usuario nao existe!'})
    }

}

export const updateUser = async (req, res) => {
    const {id} = req.params

    const { username, email, password} = req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Nao ha nenhum usuario com esse id`)
    }

    let updatedData = {}
    if(username != null)
        updatedData['username'] = username
    if(email != null)
        updatedData['email'] = email
    if(password != null)
        updatedData['password'] = password

    updatedData[id] == id
    

    await userModel.findByIdAndUpdate(id,updatedData, {new: true})

    res.json(updatedData)
    console.log('USUARIO ATUALIZADO')
}

export const deleteUser = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Nao ha nenhum usuario com esse id`)
    }
    
    await userModel.findByIdAndRemove(id)

    res.json({message: `O usuario com id ${id} foi deleteado`})

}