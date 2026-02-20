import {Schema, model} from "mongoose"

const  userSchema= Schema({
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },

    isOPened:{
        type:Boolean,
        default:false
    }

},{timestamps:true})


const  emailModel= model("emails", userSchema)
export default emailModel