import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) =>{
    const BlogDate = new Date(date)
    return (
        <tr className="bg-slate-800 border-b border-emerald-700 hover:bg-slate-700 transition-colors">
            <th scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-white whitespace-nowrap">
                <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon || "/placeholder.svg"} className="rounded-full" />
                <p>{author?author:"No author"}</p>
            </th>
            <td className="px-6 py-4 text-emerald-100">
                {title?title:"no title"}
            </td>
            <td className="px-6 py-4 text-emerald-100">
                {BlogDate.toDateString()}
            </td>
            <td onClick={()=>deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer text-red-400 hover:text-red-300 font-bold transition-colors">
                ✕
            </td>
        </tr>
    )
}

export default BlogTableItem
