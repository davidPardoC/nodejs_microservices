import { NextFunction, Request, Response, Router } from 'express'
import { AuthServices } from '../services/auth.services'

const router = Router()
const authServices = new AuthServices()

router.get('', async (_: Request, res: Response) => {
    res.json({ status: 'ok' })
})

router.post(
    'login',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username, password } = req.body
            const token = await authServices.loginUser(username, password)
            res.json(token)
        } catch (error) {
            next(error)
        }
    }
)

export { router as authRouter }
