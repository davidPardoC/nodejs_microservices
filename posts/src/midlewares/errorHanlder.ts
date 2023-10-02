import { NextFunction, Request, Response } from "express";

export const errorHandler = (error: any, _req:Request, res:Response, _next:NextFunction) => {
    let status = 500
    let currentError = error
    if (error.code == 23505){
        status = 409
        currentError = error.detail
    }
    res.status(status).json({error:currentError})
}