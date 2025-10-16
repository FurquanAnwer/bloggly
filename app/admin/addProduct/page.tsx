'use client'
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const Page = () => {
    const [image,setImage] = useState(false)
  return (
    <>
        <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl">
                Upload thumbnail
            </p>
            <label htmlFor="image">
                <Image className="mt-4" src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={140}/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />            
            <p className="text-xl mt-4">Blog title</p>
            <input className="" type="text" placeholder="Type here" required/>
        </form>
    </>
  );
}; 

export default Page;