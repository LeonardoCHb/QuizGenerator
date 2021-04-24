import mongoose from 'mongoose'
/* import userModel from './userModels' */

const quizSchema = mongoose.Schema({
    quizName: {
        type: String,
        required: true,
    },
    /* email: {
        type:String,
        unique: true,
        required: true,
    }, */
    public:{
        type: Boolean
    },
    questions: [],
    responses: [],
    createdAt: {
        type: Date,
        default: new Date()
    },
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }
})

const quizModel = mongoose.model('quizModel', quizSchema)

export default quizModel