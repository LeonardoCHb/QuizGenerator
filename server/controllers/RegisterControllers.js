import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from "../models/userModels.js"

const secret = "test";

export const signUp = async (req, res) => {
    const {name , email, password, confirmPassword} = req.body
   
    try {
        const userExists = await userModel.findOne({ email })
        if(userExists)
            return res.status(400).json({message: "Usuario ja existe"})

        if(password !== confirmPassword)
            return res.status(400).json({message: "Senhas diferentes!"})

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userModel.create({name, email, password: hashedPassword})
        
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1hr" })

        res.status(201).json({ result, token})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

export const signIn = async(req, res) => {
    const {email, password} = req.body

    try {
        const userExists = await userModel.findOne({ email })

        if(!userExists)
            return res.status(400).json({message: "Email ou senha incorretos!"})

        const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

        if(!isPasswordCorrect)
            return res.status(400).json({message: "Email ou senha incorretos!"})
        const token = jwt.sign({ email: userExists.email, id: userExists._id }, secret, { expiresIn: "1hr" })

        res.status(200).json({ result: userExists, token })

        console.log('Usuario logado com sucesso!')
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

