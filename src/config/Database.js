import mongoose from "mongoose";

export default async function dbCon(){
    try {
        const uri = process.env.MONGO_URI
        await mongoose.connect(uri)
        return uri
    } catch (error) {
        return false        
    }
}