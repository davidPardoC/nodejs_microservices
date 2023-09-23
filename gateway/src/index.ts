import express from 'express'
import proxy from 'express-http-proxy'
import "dotenv/config" 
import { authRouter } from './routes'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan("common"))
app.use("/api/auth", authRouter)
app.use("/api/users", proxy(process.env.USERS_URL as string) )
app.use("/api/posts", proxy(process.env.POSTS_URL as string))


export const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Gateway is listening on port ${PORT}`)
    })
}

startServer()