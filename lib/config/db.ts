import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://blogapp:sshcetC84W0dnGRm@cluster0.h8bdkam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("DB Connected")
}

