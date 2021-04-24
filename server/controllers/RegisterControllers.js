import userModel from "../models/userModels.js"

export const signUp = async (req, res) => {
    const {username , email, password} = req.body
   
    try {
        const userExists = await userModel.findOne({ email })

        if(userExists)
            return res.status(400).json({message: "Usuario ja existe"})

    
        
        const newUser = await userModel.create({username, email, password})
        console.log(newUser)

        res.status(201).json(newUser)
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

        const correctPassword = userExists.password
        
        if(password != correctPassword)
            return res.status(400).json({message: "Email ou senha incorretos!"})
        

        res.status(200).json(userExists)
        console.log('Usuario logado com sucesso!')
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

