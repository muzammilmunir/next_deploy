import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header>
        {/* <!-- UPPER HEADER --> */}
        <div className="bg-white px-48">
            <div className="flex justify-between items-center">
                <div className="inline-flex items-center">
                    <div>
                        <Image src="/assets/images/header-icon01.png" width={71} height={62} alt=""/>
                    </div>
                    <div>
                        <p className="text-[#2D2D2D] text-base font-normal">REVENUE DRIVEN FOR OUR CLIENTS</p>
                        <p className="text-[#2D2D2D] text-2xl font-bold">$3,021,182,299</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-4xl text-[#2D2D2D]">888-601-5359</p>
                </div>
            </div>
        </div>
        {/* <!-- MAIN HEADER --> */}
        <div className="bg-[#181B46] px-48 py-14">
            <div className="flex items-center">
                <div>
                    <Image src="/assets/images/logo-white.png" width={105} height={61} alt=""/>
                </div>
                <div className="ml-auto">
                    <ul className="flex items-center">
                        <li className="text-white text-base font-semibold mr-20"><Link href="/seo">Seo</Link></li>
                        <li className="text-white text-base font-semibold mr-20"><Link href="/mobile-development">Apps</Link></li>
                        <li className="text-white text-base font-semibold mr-20"><Link href="/digital-marketing">Digital</Link></li>
                        <li className="text-white text-base font-semibold mr-20"><Link href="/artificial-intelligence">AI</Link></li>
                        {/* <li className="text-white text-base font-semibold mr-20">Resources</li>
                        <li className="text-white text-base font-semibold mr-32">Contact us</li> */}
                        <button className="bg-[#FF9E44] text-[#171B47] text-base px-12 py-5 rounded-[40px] font-bold">Let’s Talk <span><Image src="/assets/images/send.png" width={18} height={17} className="inline" alt=""/></span></button>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Nav