import express, { Response, json } from 'express'
import "dotenv/config"
import "reflect-metadata"
import { PostRouter } from './routes/post.routes'
import { connectDatabase } from './database/postgres'

const app = express()
const PORT = process.env.PORT || 5500

app.use(json())

app.get("/status", (_, res:Response)=>{
    res.json({status: "Ok from posts_ms"})
})

app.use("/", PostRouter)

export const startServer = async () => {
    await connectDatabase()
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

startServer()