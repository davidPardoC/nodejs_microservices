import amqp from 'amqplib'
import { UserModel } from '../models/user.model'

export const onPostCreated = async (data: amqp.ConsumeMessage | null) => {
    try {
        const { userId } = JSON.parse(
            Buffer.from(data?.content || '').toString()
        )
        const user = await UserModel.findById(userId)
        if (!user) {
            return
        }
        user.postCount = isNaN(user.postCount) ? 1 : user.postCount + 1
        user.save()
    } catch (error) {
        console.log(error)
    }
}
