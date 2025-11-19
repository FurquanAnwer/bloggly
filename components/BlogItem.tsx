import Image from "next/image";
import { assets, blog_data } from "@/assets/assets";
import Link from "next/link";

const BlogItem = ({title,description,category,image,id}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-slate-800 border border-emerald-700 overflow-hidden hover:shadow-[-7px_7px_0px_rgba(16,185,129,0.5)] transition-all duration-300">
        <Link href={`/blogs/${id}`}>
            <Image src={image || "/placeholder.svg"} alt='' width={400} height={400} className="border-b border-emerald-700"/>
        </Link>
        <p className="ml-5 mt-5 px-3 py-1 inline-block bg-emerald-600 text-white text-sm rounded-full font-semibold">
            {category}
        </p>
        <div className="p-5">
            <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
                {title}
            </h5>
            <p className="mb-3 text-sm tracking-tight text-emerald-100" dangerouslySetInnerHTML={{__html:description.slice(0,120)}}>
                
            </p>
            <Link href={`/blogs/${id}`}>
                <div className="inline-flex items-center py-2 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                    Read more
                    <Image src={assets.arrow || "/placeholder.svg"} alt = '' width={12} className="ml-2"/>
                </div>
            </Link>
        </div>
    </div> 
  );
};

export default BlogItem;
