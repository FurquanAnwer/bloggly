import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-gradient-to-r from-emerald-900 to-slate-900 py-8 items-center border-t border-emerald-700">
        <Image src={assets.logo_light || "/placeholder.svg"} alt="" width={120} />
        <p className="text-sm text-emerald-100">All rights reserved. Copyright@bloggly</p>
        <div className="flex gap-4">
        <Image src={assets.facebook_icon || "/placeholder.svg"} alt="" width={40}/>
        <Image src={assets.twitter_icon || "/placeholder.svg"} alt="" width={40}/>
        <Image src={assets.googleplus_icon || "/placeholder.svg"} alt="" width={40}/>
        </div>
    </div>  
);
};

export default Footer;
