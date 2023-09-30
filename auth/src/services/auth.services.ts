import axios from "axios";
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from "../errors/customErrors";

export class AuthServices {
    async loginUser(email:string, password:string){
        const { data: user } = await axios.get<{email:string, password:string}>(`/api/users/username/${email}`)
        if (!user){
            throw new UnauthorizedError()
        }
        if (!(await this.isValidPassword(password, user.password))){
            throw new UnauthorizedError()
        }

        return {token: await jwt.sign(user, "my_secret_key", {expiresIn:"1h"})}
    }

    private isValidPassword( password:string, hashPassword:string){
        return bcrypt.compare(password, hashPassword)
    }
}