import { Schema, model } from 'mongoose';

const User = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
});

const UserModel = model('user', User);
export { UserModel };