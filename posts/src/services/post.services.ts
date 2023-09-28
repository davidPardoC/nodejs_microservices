import { Post } from '../entities/post'
import { Repository } from 'typeorm'
import { rabbitChanel } from '../queue/rabbitmq'
import { QueueEnums } from '../enums/queue.enum'

export class PostServices {
    constructor(private postRepository: Repository<Post>) {}

    async getAllPosts() {
        return this.postRepository.find()
    }

    async createPost(
        content: string,
        title: string,
        userId: string,
        username: string
    ) {
        const createdPost = await this.postRepository.save({
            content,
            title,
            author: userId,
            authorName: username,
        })
        rabbitChanel.sendToQueue(
            QueueEnums.POST_CRATED,
            Buffer.from(JSON.stringify({ userId }))
        )
        return createdPost
    }

    async getPostsByUsername(username: string) {
        const posts = await this.postRepository.find({
            where: { authorName: username },
        })
        return posts
    }
}
