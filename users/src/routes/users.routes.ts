import { NextFunction, Request, Response, Router } from "express";
import { UserModel } from "../models/user.model";
import { UserServices } from "../services/user.services";

const router = Router()
const userServices = new UserServices(UserModel)

router.post("/", async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {email, password} = req.body
        const createdUser = await userServices.createUser(email, password)
        res.json(createdUser)
    } catch (error) {
        next(error)
    }
})

router.get("/", async (_:Request, res:Response, next:NextFunction)=>{
    try {
         const user = await userServices.getAllUsers()
         res.json(user)
    } catch (error) {
         next(error)
    }
 })

router.get("/:id", async (req:Request, res:Response, next:NextFunction)=>{
   try {
    const {id} = req.params
    const user = await userServices.getUserById(id)
    res.json(user)
   } catch (error) {
        next(error)
   }
})


router.get("/email/:email", async (req:Request, res:Response, next:NextFunction)=>{
    try {
     const {email} = req.params
     const user = await userServices.getUserByEmail(email)
     res.json(user)
    } catch (error) {
         next(error)
    }
 })

export {router as userRouter}