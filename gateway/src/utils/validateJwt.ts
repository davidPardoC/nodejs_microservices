import jwt from 'jsonwebtoken'

export const validateJwt = async (jwtString:string) => {
    return jwt.decode(jwtString)
}