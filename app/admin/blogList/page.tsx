'use client'

import BlogTableItem from "@/components/AdminComponents/BlogTableItem"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

const page = () =>{

    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async ()=>{
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
    }

    const deleteBlog = async (mongoId)=>{
        const response = await axios.delete('/api/blog',{
            params:{
                id:mongoId
            }
        })
        toast.success(response.data.msg)
        fetchBlogs()
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    return (
        <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
            <h1 className="text-2xl font-semibold mb-4">All blogs</h1>
            <div className="relative max-w-4xl overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm text-gray-600">
                    <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-semibold">
                                Author name
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                                Blog title
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item)=>{
                            return <BlogTableItem key={item._id} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}
                            />
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default page
