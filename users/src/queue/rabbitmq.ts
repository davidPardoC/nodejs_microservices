import amqp from 'amqplib'
import { QueueEnums } from '../enums/queue.enum'
import { onPostCreated } from './consumer'

let rabbitChanel: amqp.Channel

export const connectToQueue = async () => {
    try {
        const connection = await amqp.connect('amqp://rabbit_mq:5672')
        rabbitChanel = await connection.createChannel()
        console.log('Connected to RabbitMQ queue')
        rabbitChanel.assertQueue(QueueEnums.POST_CRATED)
        rabbitChanel.consume(QueueEnums.POST_CRATED, onPostCreated, {
            noAck: true,
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export { rabbitChanel }
