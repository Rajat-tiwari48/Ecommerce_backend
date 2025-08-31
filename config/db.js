
import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
}