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
            const { username, _id: userId } = res.locals.user
            const posts = await postServices.createPost(
                content,
                title,
                userId,
                username
            )
            res.json(posts)
        } catch (error) {
            next(error)
        }
    }
)

router.get(
    '/username/:username',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username } = req.params
            const posts = await postServices.getPostsByUsername(username)
            res.json(posts)
        } catch (error) {
            next(error)
        }
    }
)

export { router as PostRouter }
