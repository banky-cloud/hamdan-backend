import express from "express"
import cors from "cors"
import  dotenv from "dotenv"
import connectDB from "./connectDB.js"
import emailModel from "./mailSchema.js"

dotenv.config()

const server= express()

server.use(express.json())

server.use(cors())

server.get("/", async (req,res)=>{
    try{
     const allMails= await  emailModel.find();
     return res.status(200).json({success:true, result:allMails})
    }
    catch(err){
        return res.status(500).json({success:false, result:err.message})
    }
})


server.post("/add", async(req,res)=>{
    try {
         const  newEmail= await  emailModel.create(req.body)

         return res.status(200).json({success:true, result:"We'll be in touch"})
    } catch (error) {
       return res.status(500).json({success:false, result:error.message}) 
    }
})


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