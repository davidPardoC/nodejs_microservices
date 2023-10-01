import axios from 'axios'
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../errors/customErrors'
import 'dotenv/config'

export class AuthServices {
    async loginUser(email: string, password: string) {
        const { data: user } = await axios.get<{
            email: string
            password: string
        }>(`/api/users/username/${email}`)
        if (!user) {
            throw new UnauthorizedError()
        }
        if (!(await this.isValidPassword(password, user.password))) {
            throw new UnauthorizedError()
        }
        console.log(process.env.JWT_SECRET)
        return {
            token: await jwt.sign(user, process.env.JWT_SECRET as string, {
                algorithm: 'HS256',
                header: { alg: 'HS256', kid: 'sim2' },
            }),
        }
    }

    private isValidPassword(password: string, hashPassword: string) {
        return bcrypt.compare(password, hashPassword)
    }
}
