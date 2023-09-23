import mongoose from "mongoose"
import "dotenv/config"


export const connectMongoDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI as string)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}