import { Post } from '../entities/post'
import { Repository } from 'typeorm'


export class PostServices {
    constructor(private postRepository: Repository<Post>){}

    async getAllPosts(){
        return this.postRepository.find()
    }

    async createPost(content:string, title:string, userId:string){
        const createdPost = await this.postRepository.save({content, title,  author: userId})
        return createdPost
    }
}