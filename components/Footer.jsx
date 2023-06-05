import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer-gradient p-48">
        <div className="max-w-[1283px] mx-auto flex justify-between items-start">
            <div><Image src="/assets/images/logo-white.png" width={105} height={61} alt=""/></div>
            <div>
                <p className="text-[24px] text-white font-semibold">Follow us on</p>
                <div className="flex items-center justify-between space-x-[36px] my-[24px]">
                    <Image src="/assets/images/instagram.png" width={28} height={28} alt=""/>
                    <Image src="/assets/images/facebook.png" width={28} height={28} alt=""/>
                    <Image src="/assets/images/youtube.png" width={28} height={28} alt=""/>
                    <Image src="/assets/images/linkedIn.png" width={28} height={28} alt=""/>
                    <Image src="/assets/images/twitter.png" width={28} height={28} alt=""/>
                    <Image src="/assets/images/spotify.png" width={28} height={28} alt=""/>
                </div>
                <a href="#" className="text-[#FFB800] font-bold text-[24px] underline">Email Us</a>
            </div>
            <div>
                <p className="text-[24px] text-white font-semibold">Office</p>
                <p className="text-white text-[17px] my-[24px] ">3750 S Robertson Blvd <br/>
                    Suite #200 <br/>
                    Culver City, CA 90232</p>
            </div>
            <div>
                <p className="text-[24px] text-white font-semibold">Contact</p>
                <p className="text-white text-[18px] my-[24px] leading-none">P: (310) 827-3890</p>
                <p className="text-white text-[18px] mb-[24px] leading-none">F: (323) 920-0390</p>
                <p className="text-white text-[18px] leading-none">E: Get a Free Proposal</p>
            </div>
        </div>
        <div className="flex items-start justify-between my-[60px]">
            <div className="space-y-[25px]">
                <p className="text-white text-[24px]">SEO (Search Engine Optimization)</p>
                <p className="text-white text-[24px]">PPC (Pay Per Click Management)</p>
                <p className="text-white text-[24px]">Content Marketing</p>
            </div>
            <div className="space-y-[25px]">
                <p className="text-white text-[24px]">Online Reputation Management</p>
                <p className="text-white text-[24px]">Social Media</p>
                <p className="text-white text-[24px]">BigCommerce</p>
                <p className="text-white text-[24px]">ADA Compliant Websites</p>
            </div>
            <div className="space-y-[25px]">
                <p className="text-white text-[24px]">WordPress</p>
                <p className="text-white text-[24px]">Shopify</p>
                <p className="text-white text-[24px]">Magento</p>
                <p className="text-white text-[24px]">Mobile</p>
                <p className="text-white text-[24px]">Logo and Branding</p>
            </div>
            <div className="space-y-[25px]">
                <p className="text-white text-[24px]">Industries</p>
                <p className="text-white text-[24px]">Reviews</p>
                <p className="text-white text-[24px]">Case Studies</p>
                <p className="text-white text-[24px]">Awards and <br/>
                    Accomplishments</p>
                <p className="text-white text-[24px]">Blog</p>
                <p className="text-white text-[24px]">Contact Us</p>
            </div>
        </div>
        <div className="border-t border-t-[#757575]">
            <div className="flex justify-center mt-[43px] space-x-4">
                <p className="text-[13px] text-[#757575]">© 2023 Coalition Technologies. All Rights Reserved</p>
                <p className="text-[13px] text-[#757575]">|  HTML sitemap</p>
                <p className="text-[13px] text-[#757575]">|  Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer