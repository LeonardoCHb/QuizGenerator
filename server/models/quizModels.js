import mongoose from 'mongoose'

const quizSchema = mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true},
    description: { type: String, required: true },
    creator: { type: String, required: true },
    public: { type: Boolean, required: true },
    questions: {
        type: [Object],
        default: [],
        required: true
    },
    createdAt: { type: Date, default: new Date() }
})

export default  mongoose.model('quizModel', quizSchema)
