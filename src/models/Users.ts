import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userId: String,
  phone: String,
  email: {
    type: String,
    lowercase: true,
  },
  name: String,
  password: String,
  status: String, // "VERIFIED", "PENDING"
  updatedAt: Number,
  links: {
    github: String,
    linkedin: String,
    codeforces: String,
    codechef: String,
  },
});

export default model('user', UserSchema);
