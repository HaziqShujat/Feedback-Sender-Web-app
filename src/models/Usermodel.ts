import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  created: Date;
}

const Messageschema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifycode: string;
  isverified: boolean;
  codeexpiry: Date;
  isacceptingMessage: boolean;
  messages: Message[];
}

const Userschema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [
      /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
      "please input valied email",
    ],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  verifycode: {
    type: String,
    required: [true, "verify code is required"],
  },
  codeexpiry: {
    type: Date,
    required: [true, "verify code expiry is required"],
  },
  isverified: {
    type: Boolean,
    default: false,
  },

  isacceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [Messageschema],
});


const Usermodel= (mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("User",Userschema)


export default Usermodel