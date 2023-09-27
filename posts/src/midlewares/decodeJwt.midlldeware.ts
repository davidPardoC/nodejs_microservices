import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const decodeJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (token) {
        const decodedJwt = jwt.decode(token)
        console.log(decodedJwt)
        res.locals.user = decodedJwt
    }
    next()
}
