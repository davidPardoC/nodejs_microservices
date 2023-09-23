import {UserModel} from '../models/user.model'
import * as bctypt from 'bcryptjs'

export class UserServices{
    constructor(private userModel: typeof UserModel){}

    async getUserById(id:string){
        return this.userModel.findById(id)
    }

    async createUser(email:string, password:string){
        const hashedPassword = await bctypt.hash(password, 10)
        const created_user = await this.userModel.create({email, password:hashedPassword})
        return created_user
    }

    async getUserByEmail(email:string){
        return this.userModel.findOne({email})
    }

    async getAllUsers(){
        return this.userModel.find()
    }
}