import axios from "axios";
import { config } from "../config/config";
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class AuthServices {
    async loginUser(email:string, password:string){
        const { data: user } = await axios.get<{email:string, password:string}>(`${config.usersMsUrl}/username/${email}`)
        if (!(await this.isValidPassword(password, user.password))){
            throw new Error("Unauthorized")
        }

        return {token: await jwt.sign(user, "my_secret_key", {expiresIn:"1h"})}
    }

    private isValidPassword( password:string, hashPassword:string){
        return bcrypt.compare(password, hashPassword)
    }
}