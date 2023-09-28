import { NextFunction, Request, Response, Router } from 'express'
import { AppDataSource } from '../database/postgres'
import { Post } from '../entities/post'
import { PostServices } from '../services/post.services'
import { decodeJWT } from '../midlewares/decodeJwt'

const router = Router()

const postRepository = AppDataSource.getRepository(Post)
const postServices = new PostServices(postRepository)

router.get('', async (_, res: Response, next: NextFunction) => {
    try {
        const posts = await postServices.getAllPosts()
        res.json(posts)
    } catch (error) {
        next(error)
    }
})

router.post(
    '',
    decodeJWT,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { content, title } = req.body
            const userId = req.get('x-user-id') as string
            const posts = await postServices.createPost(content, title, userId)
            res.json(posts)
        } catch (error) {
            next(error)
        }
    }
)

export { router as PostRouter }
