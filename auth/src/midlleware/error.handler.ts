import { Request, Response } from 'express'

export const errorHandler = (err: any, _: Request, res: Response) => {
    try {
        res.status(500).send(err)
    } catch (error) {
        console.log(error)
    }
}
