import { Schema, model } from 'mongoose';

const User = new Schema();

const UserModel = model('user', User);
export { UserModel };