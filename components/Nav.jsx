import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header>
        {/* <!-- UPPER HEADER --> */}
        <div class="bg-white px-48">
            <div class="flex justify-between items-center">
                <div class="inline-flex items-center">
                    <div>
                        <Image src="/assets/images/header-icon01.png" width={71} height={62} alt=""/>
                    </div>
                    <div>
                        <p class="text-[#2D2D2D] text-base font-normal">REVENUE DRIVEN FOR OUR CLIENTS</p>
                        <p class="text-[#2D2D2D] text-2xl font-bold">$3,021,182,299</p>
                    </div>
                </div>
                <div>
                    <p class="font-bold text-4xl text-[#2D2D2D]">888-601-5359</p>
                </div>
            </div>
        </div>
        {/* <!-- MAIN HEADER --> */}
        <div class="bg-[#181B46] px-48 py-14">
            <div class="flex items-center">
                <div>
                    <Image src="/assets/images/logo-white.png" width={105} height={61} alt=""/>
                </div>
                <div class="ml-auto">
                    <ul class="flex items-center">
                        <li class="text-white text-base font-semibold mr-20">Casestudies</li>
                        <li class="text-white text-base font-semibold mr-20">Services</li>
                        <li class="text-white text-base font-semibold mr-20">About us</li>
                        <li class="text-white text-base font-semibold mr-20">Blogs</li>
                        <li class="text-white text-base font-semibold mr-20">Resources</li>
                        <li class="text-white text-base font-semibold mr-32">Contact us</li>
                        <button class="bg-[#FF9E44] text-[#171B47] text-base px-12 py-5 rounded-[40px] font-bold">Let’s Talk <span><Image src="/assets/images/send.png" width={18} height={17} class="inline" alt=""/></span></button>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Nav