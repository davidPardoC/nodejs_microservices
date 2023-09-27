import { Document, Schema, model } from "mongoose";

export interface UserDoc extends Document{
    password:string
    postCount: number,
    username: string,
}

const userSchema = new Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    postCount: {type:Number}
})

export const UserModel = model<UserDoc>("user", userSchema)