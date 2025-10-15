import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING_)
    console.log("DB Connected")
}

