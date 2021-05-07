import mongoose from 'mongoose'

const responseSchema = mongoose.Schema({
    quiz: { type: String, required: true },
    answeredBy: { type: String, required: true},
    creator: { type: String, required: true },
    responses: {
        type: [Object],
        default: [],
        required: true
    },
    answeredAt: { type: Date, default: new Date() }
})

export default  mongoose.model('responseModel', responseSchema)