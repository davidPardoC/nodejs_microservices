import express, { json } from 'express'
import proxy from 'express-http-proxy'
import { authRouter } from './routes'
import morgan from 'morgan'
import "dotenv/config" 
import { config } from './config/config'
import { errorHandler } from './midlleware/error.handler'
import { validateJwt } from './utils/validateJwt'


const app = express()
const PORT = process.env.PORT || 3000

app.use(json())
app.use(morgan("common"))

app.use("/api/auth", authRouter)
app.use("/api/users", proxy(config.usersMsUrl))
app.use("/api/posts", proxy(config.postsMsUrl , {
    proxyReqOptDecorator: function(proxyReqOpts){
        return new Promise(async (resolve, reject)=>{
            if (proxyReqOpts.method === "POST"){
                const authHeader = proxyReqOpts.headers ? proxyReqOpts.headers["authorization"] as string : "";
                const inCommingToken = authHeader?.split(" ")[1] || ""
                if(!authHeader || !inCommingToken){
                    reject("Unauthorized")
                }
                const token = await validateJwt(inCommingToken)
                if (!token){
                    reject("Unauthorized")
                    return
                }
                if(proxyReqOpts.headers) proxyReqOpts.headers["x-user-id"] = (token as any)._id
                resolve (proxyReqOpts)
            }
            resolve (proxyReqOpts)
        })
    }
}))

app.use(errorHandler)


export const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Gateway is listening on port ${PORT}`)
    })
}

startServer()