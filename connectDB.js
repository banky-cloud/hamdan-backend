import { connect } from "mongoose"

const  connectDB=(mongo_uri)=>{
    return connect(mongo_uri  )
}
export default connectDB