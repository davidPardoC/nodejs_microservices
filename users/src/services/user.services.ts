import { UserModel } from '../models/user.model'
import * as bctypt from 'bcryptjs'

export class UserServices {
    constructor(private userModel: typeof UserModel) {}

    async getUserById(id: string) {
        return this.userModel.findById(id)
    }

    async createUser(username: string, password: string) {
        const hashedPassword = await bctypt.hash(password, 10)
        const created_user = await this.userModel.create({
            username,
            password: hashedPassword,
        })
        return created_user
    }

    async getUserByUsername(username: string) {
        return this.userModel.findOne({ username })
    }

    async getAllUsers() {
        return this.userModel.find()
    }
}
