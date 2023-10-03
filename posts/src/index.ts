import express, { Response, json } from 'express'
import "dotenv/config"
import { PostRouter } from './routes/post.routes'
import { connectDatabase } from './database/postgres'
import { connectToQueue } from './queue/rabbitmq'
import morgan from 'morgan'
import { errorHandler } from './midlewares/errorHanlder'
import "reflect-metadata"

const app = express()
const PORT = process.env.PORT || 5500

app.use(json())
app.use(morgan('common'))

app.get("/status", (_, res:Response)=>{
    res.json({status: "Ok from posts_ms"})
})

app.use("/", PostRouter)

app.use(errorHandler)

export const startServer = async () => {
    await connectDatabase()
    await connectToQueue()
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

startServer()