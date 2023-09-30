import jwt from 'jsonwebtoken'

export const validateJwt = async (jwtString:string) => {
    return jwt.decode(jwtString)
}

export const getTokenFromAuthHeader = (authHeader:string = "") => {
    const token = authHeader.split(" ")[1]
    return token
}