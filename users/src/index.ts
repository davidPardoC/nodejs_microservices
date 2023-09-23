import express, { Response, json } from 'express'
import { connectMongoDatabase } from './database/mongo'
import "dotenv/config"
import { userRouter } from './routes/users.routes'

const app = express()
const PORT = process.env.PORT || 5500

app.use(json())

app.get("/status", (_, res:Response)=>{
    res.json({status: "Ok from users_ms"})
})

app.use("/", userRouter)

export const startServer = async () => {
    await connectMongoDatabase()
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

startServer()