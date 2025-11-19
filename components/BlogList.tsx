import { blog_data } from "@/assets/assets";
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  
    const [menu,setMenu] = useState("All")
    const [blogs,setBlogs] = useState([])

    const fetchBlogs = async () =>{
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
        console.log(response.data.blogs)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])


  return (
    <div className="bg-white">
        <div className="flex justify-center gap-6 my-10 flex-wrap">
            <button className={menu=== "All" ? "bg-emerald-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg" : "text-emerald-400 py-2 px-6 rounded-full font-semibold hover:text-emerald-300 transition-colors"} onClick={()=>setMenu('All')}>
                All 
            </button>   
            <button onClick={()=>setMenu('Technology')} className={menu=== "Technology" ? "bg-emerald-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg" : "text-emerald-900 py-2 px-6 rounded-full font-semibold hover:text-emerald-300 transition-colors"}>Technology</button>
            <button onClick={()=>setMenu('Startup')} className={menu=== "Startup" ? "bg-emerald-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg" : "text-emerald-900 py-2 px-6 rounded-full font-semibold hover:text-emerald-300 transition-colors"}>Startup</button> 
            <button onClick={()=>setMenu('Lifestyle')} className={menu=== "Lifestyle" ? "bg-emerald-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg" : "text-emerald-900 py-2 px-6 rounded-full font-semibold hover:text-emerald-300 transition-colors"}>Lifestyle</button>         
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
            {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>(
                <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
            ))}
        </div>
    </div>
  );
};

export default BlogList;
