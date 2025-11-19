'use client'
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
    const [image,setImage] = useState<File|null>(null)
    const [data,setData] = useState({
        title:"",
        description:"",
        category:"Startup",
        author:"Alex Bennett",
        authorImg:"/author_img.png"
    })

    const onChangeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);

    if (image) {
      formData.append("image", image);
    }

    const response = await axios.post("/api/blog", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.data.success) {
      toast.success(response.data.msg);

      setImage(null);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <form onSubmit={onSubmitHandler} className="max-w-2xl mx-auto pt-8 px-5 sm:pt-16 pb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Create New Blog</h1>
          <p className="text-slate-600">Share your thoughts with the world</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100 mb-8">
          <label htmlFor="image" className="block mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Upload Thumbnail</p>
            <div className="relative cursor-pointer group">
              <Image 
                className="rounded-lg transition-all duration-300 group-hover:shadow-lg" 
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                width={200} 
                height={200}
                alt="Blog thumbnail"
              />
              <div className="absolute inset-0 rounded-lg bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </label>
          <input onChange={(e)=>setImage(e.target.files?.[0] || null)} type="file" id='image' hidden required />            
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100">
          <div className="mb-8">
            <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Blog Title</label>
            <input 
              id="title"
              name="title" 
              onChange={onChangeHandler} 
              value={data.title} 
              className="w-full px-4 py-3 rounded-lg border-2 border-emerald-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all duration-200 text-slate-900 placeholder-slate-400" 
              type="text" 
              placeholder="Enter blog title..." 
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Blog Description</label>
            <textarea 
              id="description"
              name="description" 
              onChange={onChangeHandler} 
              value={data.description} 
              className="w-full px-4 py-3 rounded-lg border-2 border-emerald-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all duration-200 text-slate-900 placeholder-slate-400 resize-none h-32" 
              placeholder="Write your content..." 
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Blog Category</label>
            <select 
              id="category"
              name="category" 
              onChange={onChangeHandler} 
              value={data.category} 
              className="w-full sm:w-64 px-4 py-3 rounded-lg border-2 border-emerald-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all duration-200 text-slate-900 bg-white"
            >
              <option value="Startup">Startup</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full sm:w-48 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 uppercase tracking-wide"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
}; 

export default Page;
