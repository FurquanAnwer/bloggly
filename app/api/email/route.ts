import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextRequest, NextResponse } from "next/server";

const LoadDB = async ()=>{
    await ConnectDB()
}

LoadDB()

export async function POST(request:NextRequest){
    const formData = await request.formData()
    const emailData = {
        email:`${formData.get('email')}`,
    }
    await EmailModel.create(emailData)
    return NextResponse.json({success:'true',msg:"Email Subscribed"})

}


export async function GET(request:NextRequest){
    const emails = await EmailModel.find({})
    return NextResponse.json({emails})
}

 
export async function DELETE(request:NextRequest){
    const id = await request.nextUrl.searchParams.get("id")
    await EmailModel.findByIdAndDelete(id)
    return NextResponse.json({success:true,msg:"Email Deleted"})
}

