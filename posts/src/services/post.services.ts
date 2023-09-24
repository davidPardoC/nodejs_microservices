import { Post } from '../entities/post'
import { Repository } from 'typeorm'
import { rabbitChanel } from '../queue/rabbitmq'
import { QueueEnums } from '../enums/queue.enum'

export class PostServices {
    constructor(private postRepository: Repository<Post>) {}

    async getAllPosts() {
        return this.postRepository.find()
    }

    async createPost(content: string, title: string, userId: string) {
        const createdPost = await this.postRepository.save({
            content,
            title,
            author: userId,
        })
        rabbitChanel.sendToQueue(
            QueueEnums.POST_CRATED,
            Buffer.from(JSON.stringify({ userId }))
        )
        return createdPost
    }
}
