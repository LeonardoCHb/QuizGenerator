import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model('userModel', userSchema)
