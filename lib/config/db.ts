import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!)
    console.log("DB Connected")
}

