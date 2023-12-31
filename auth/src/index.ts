import express, { json } from 'express'
import { authRouter } from './routes'
import morgan from 'morgan'
import 'dotenv/config'
import { errorHandler } from './midlleware/error.handler'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3003

app.use(json())
app.use(morgan('common'))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/', authRouter)

app.use(errorHandler)

export const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Auth service is listening on port ${PORT}`)
    })
}

startServer()
