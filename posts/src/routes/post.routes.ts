import { NextFunction, Request, Response, Router } from "express";
import { AppDataSource } from "../database/postgres";
import { Post } from "../entities/post";
import { PostServices } from "../services/post.services";

const router = Router()

const postRepository = AppDataSource.getRepository(Post)
const postServices = new PostServices(postRepository)

router.get("", async (_, res:Response, next:NextFunction)=>{
    try {
        const posts = await postServices.getAllPosts()
        res.json(posts)
    } catch (error) {
        next(error)
    }
})


router.post("", async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const {content, title} = req.body
        const posts = await postServices.createPost(content, title)
        res.json(posts)
    } catch (error) {
        next(error)
    }
})


export {router as PostRouter}