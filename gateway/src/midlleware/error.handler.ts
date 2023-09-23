import { Request, Response } from "express";

export const errorHandler = (err:any, _:Request, res:Response) =>{
    res.status(500).json(err)
}