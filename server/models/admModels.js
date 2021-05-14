import mongoose from 'mongoose'

const admSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    id : {
        type: String,
        require: true,
    }
})

export default mongoose.model('admModel', admSchema)
