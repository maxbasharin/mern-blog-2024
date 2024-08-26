import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,  // Устанавливаем значение true для уникальности
        }, 
        password: {
            type: String,
            required: true, 
        }, 
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
    },
    { timestamps: true },
)

export default mongoose.model('User', UserSchema);
