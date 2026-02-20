import express from "express"
import cors from "cors"
import  dotenv from "dotenv"
import connectDB from "./connectDB.js"

dotenv.config()

const server= express()

server.use(express.json())

server.use(cors())


const port= process.env.PORT||3000


const startServer= async()=>{
    try {
        console.log("hello")
         await connectDB(process.env.mongo_uri)
         server.listen(port, ()=>{console.log(`Database connected successfully, server is now listening on ${port}`)})
    } catch (error) {
        console.log(error)
    }
}

startServer()