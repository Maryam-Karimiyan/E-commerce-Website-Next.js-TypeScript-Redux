import mongoose from "mongoose"

const {MONGODB_URI}=process.env

const connectDb=async()=>{
    try {
        const {connection}=await mongoose.connect(MONGODB_URI as string)
        if(connection.readyState===1){
            // return Promise.resolve(true)
            console.log("Connected to mongoDb");
            
        }
    } catch (error) {
        console.log(error);
        // return Promise.reject(error)
    }
}

export {connectDb}