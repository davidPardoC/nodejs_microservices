import { DataSource } from "typeorm";
import "dotenv/config"
import { Post } from "../entities/post";

const isDevelopment = process.env.NODE_ENV !== "production"

console.log("process variables -> ", process.env.POSTGRES_HOST, process.env.POSTGRES_PORT)

export const AppDataSource = new DataSource({
    type:'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: isDevelopment,
    entities: [Post]
})

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Database connected succesfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}