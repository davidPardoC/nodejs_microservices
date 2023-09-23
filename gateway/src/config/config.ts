import "dotenv/config"

export const config = {usersMsUrl: process.env.USERS_URL as string, postsMsUrl: process.env.POSTS_URL as string }