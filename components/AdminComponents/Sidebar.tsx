import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-emerald-950 to-slate-900">
        <div className="px-2 sm:pl-14 py-3 border-b border-emerald-700 bg-emerald-900/50">
            <Link href='/'>
                <Image src={assets.logo || "/placeholder.svg"} width={120} alt="" />
     
            </Link>
        </div>
        <div className="w-28 sm:w-80 h-[100vh] relative py-12 border-r border-emerald-700/30">
            <div className="w-[50%] sm:w-[80%] absolute right-0">
            <Link href="/admin/addProduct" className="flex items-center gap-3 font-medium px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <Image src={assets.add_icon || "/placeholder.svg"} alt="" width={28}/>
                <p>Add blogs</p>
            </Link>
            <Link href="/admin/blogList" className="mt-5 flex items-center gap-3 font-medium px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <Image src={assets.blog_icon || "/placeholder.svg"} alt="" width={28}/>
                <p>Blog lists</p>
            </Link>
            <Link href="/admin/subscriptions" className="mt-5 flex items-center gap-3 font-medium px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <Image src={assets.email_icon || "/placeholder.svg"} alt="" width={28}/>
                <p>Subscriptions</p>
            </Link>

            </div>
        </div>
    </div>
  );
};

export default Sidebar;
