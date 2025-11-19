import Image from "next/image";
import {assets} from '@/assets/assets'
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const Header = () => {
    const [email,setEmail] = useState("")
    const onSubmitHandler = async (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("email",email)
        const response = await axios.post('/api/email',formData)
        if(response.data.success){
            toast.success(response.data.msg)
            setEmail("")
        }
        else{
            toast.error("Error")
        }
    }
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28 bg-white">
        <div className="flex justify-between items-center">
            <Link href="/">
            <Image src={assets.logo || "/placeholder.svg"} width={180} alt='' className="w-[130px] sm:w-auto"/>
            </Link>
            <Link href='/admin'>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-lg transition-all duration-300'>
                Get Started
                <Image src={assets.arrow || "/placeholder.svg"} alt="arrow button"/>
            </button>
            </Link>             
        </div> 
        <div className="text-center my-8">
            <h1 className="text-3xl sm:text-5xl font-medium text-emerald-900">
                Latest blogs                
            </h1>
            <p className="mt-10 max-w-[740] m-auto text-xs sm:text-base text-emerald-00">
                Lorem Ipsum is simply dummy text of this blog post.
            </p>
            <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-emerald-500 bg-slate-800 rounded-xl overflow-hidden shadow-xl">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" className="pl-4 outline-none bg-slate-800 text-white placeholder-emerald-200"/>
                <button type="submit" className="border-l border-emerald-500 py-4 px-4 sm:px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-300 active:bg-emerald-800">
                    Subscribe
                </button>
            </form>
        </div>
    </div>
  );
};

export default Header;


