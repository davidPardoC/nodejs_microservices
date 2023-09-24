import express, { json } from 'express'
import proxy from 'express-http-proxy'
import { authRouter } from './routes'
import morgan from 'morgan'
import 'dotenv/config'
import { config } from './config/config'
import { errorHandler } from './midlleware/error.handler'
import { getTokenFromAuthHeader, validateJwt } from './utils/validateJwt'
import { isPostProtectedRoute } from './utils/protectedRoutes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(json())
app.use(morgan('common'))

app.use('/api/auth', authRouter)
app.use('/api/users', proxy(config.usersMsUrl))
app.use(
    '/api/posts',
    proxy(config.postsMsUrl, {
        proxyReqOptDecorator: function (proxyReqOpts) {
            return new Promise(async (resolve, reject) => {
                const { path = '', method = '', headers = {} } = proxyReqOpts
                if (!isPostProtectedRoute(path as string, method)) {
                    resolve(proxyReqOpts)
                }
                const token = getTokenFromAuthHeader(
                    headers['authorization'] as string
                )
                if (!token) {
                    reject('Unauthorized')
                }
                const payload = await validateJwt(token)
                headers['x-user-id'] = (payload as any)._id
                resolve(proxyReqOpts)
            })
        },
    })
)

app.use(errorHandler)

export const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Gateway is listening on port ${PORT}`)
    })
}

startServer()
