import { Document, Schema, model } from "mongoose";

export interface UserDoc extends Document{
    email: string
    password:string
}

const userSchema = new Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true}
})

export const UserModel = model<UserDoc>("user", userSchema)