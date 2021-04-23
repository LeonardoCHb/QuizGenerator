import  mongoose  from "mongoose"
import userModel from "../models/userModels.js"

// Acha um usuario
export const findUser = async (req, res) => {
    const loginData = req.body
    const email = loginData.email
    console.log(email)

    try {
        const UserModel = await userModel.findOne({email}).exec()
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

export const createUser = async (req, res) => {
    const userData = req.body
   
    const newUser = new userModel(userData)

    try {
        await newUser.save()

        res.status(201).json(newUser)
    } catch(error) {
        res.status(409).json({message: error.message})
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