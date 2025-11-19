'use client'

import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
    <main className="min-h-screen bg-white">
      <Header />
      <BlogList />
      <Footer />
    </main>
    </>
  )
}


