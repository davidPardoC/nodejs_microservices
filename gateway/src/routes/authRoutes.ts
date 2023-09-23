import { Response, Router } from "express";

const router = Router()

router.get("/status", (_, res:Response)=>{
    res.json({status:"ok from auth_ms"})
})


export {router as authRouter}