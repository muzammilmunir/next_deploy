'use client'

import '@styles/style-static-page-1.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef,useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { stackAnimation } from "/lib/stack-animation.js";

// gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

// import { useEffect } from 'react';
// import '@scripts/script-static-page-1.js';

// export const metadata = {
//     title : "Homepage",
//     description : "nextJs demo Application"
// }

export const stackAnimation = ()=>{
    let timeln = gsap.timeline({
        scrollTrigger: {
            trigger: ".cardStacks",
            pin: true,
            pinSpacing: true,
            start: "left-=20px left",
            end: "+=2000",
            scrub: 2
        }
    });
    
    timeln.addLabel('card1');
    timeln.to('.cardStack-1', {
        yPercent: 0,
        opacity: 1
    });
    timeln.from(".button-1", {
        backgroundColor: '#BA83E1',
        color: "#FFF",
    });
    
    timeln.from('.cardStack-2', {
        yPercent: 75,
        opacity: 0
    });
    timeln.addLabel("card2");
    
    timeln.to(".cardStack-1", {
        scale: 0.95,
        yPercent: -7.5,
        scrub: 2,
    }, "-=0.5");
    
    timeln.to(".button-1", {
        backgroundColor: 'transparent',
        color: "#878787",
    });
    
    timeln.to(".button-2", {
        backgroundColor: '#BA83E1',
        color: "#FFF",
    });
    
    timeln.to('.cardStack-2', {
        yPercent: 0,
        opacity: 1,
        scrub: 2,
    });
    
    timeln.from('.cardStack-3', {
        yPercent: 75,
        opacity: 0
    });
    timeln.addLabel('card3');
    
    timeln.to(".cardStack-1", {
        scale: 0.90,
        scrub: 2,
    }, "-=0.5");
    
    timeln.to(".button-2", {
        backgroundColor: 'transparent',
        color: "#878787",
    });
    
    timeln.to(".button-3", {
        backgroundColor: '#BA83E1',
        color: "#FFF",
    });
    
    timeln.to(".cardStack-2", {
        scale: 0.95,
        scrub: 2,
        yPercent: -5,
    }, "-=0.5");
    
    timeln.to(".cardStack-3", {
        yPercent: 0,
        opacity: 1,
    });
    
    timeln.from('.cardStack-4', {
        yPercent: 75,
        opacity: 0,
        scrub: 2,
    });
    timeln.addLabel('card3');
    
    timeln.to(".cardStack-1", {
        scale: 0.85,
        scrub: 2,
    }, "-=0.5");
    
    timeln.to(".cardStack-2", {
        scale: 0.90,
        scrub: 2,
    }, "-=0.5");
    
    timeln.to(".cardStack-3", {
        scale: 0.95,
        scrub: 2,
        yPercent: -2.5,
    }, "-=0.5");
    
    timeln.to(".button-3", {
        backgroundColor: 'transparent',
        color: "#878787",
    });
    
    timeln.to(".button-4", {
        backgroundColor: '#BA83E1',
        color: "#FFF",
    });
    
    timeln.to(".cardStack-4", {
        yPercent: 0,
        opacity: 1,
        scrub: 2,
    });
}


const page = () => {

    const main = useRef();

    useEffect(()=>{
        stackAnimation();
    },[])

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = '/scripts/script-static-page-1.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    
    //     return () => {
    //       document.body.removeChild(script);
    //     };
    //   }, []);
  return (
      <>

      {/* <Head>
        <title>{title}</title>
        <meta 
        name='description'
        content={description}
        key="desc"
        />
      </Head> */}

      <Script src='/scripts/script-static-page-1.js' strategy='lazyOnload'></Script>



      {/* <!-- HERO SECTION --> */}
    <div className="hero-gradient px-48 rounded-b-[80px] mb-24">
        <div className="flex items-center pt-20">
            <div>
                <p className="text-2xl text-white font-medium mb-12">digital marketing that brings revenue</p>
                <p className="text-7xl text-white font-black max-w-[750px]">Data-Driven Revenue Marketing</p>
                <p className="text-white text-2xl max-w-[820px] my-12">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                <form>
                    <label className="block ">
                      <input type="email" placeholder="Enter Your Email" className="rounded-[40px] bg-transparent outline-[#5D6BD9] outline outline-1 border-none py-4 px-9 min-w-[420px] placeholder:text-white text-base text-white mr-8"/>
                      <button className="text-[#171B47] text-base bg-[#FF9E44] rounded-[70px] py-4 px-9">Contact Us <span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="inline" alt=""/></span></button>
                    </label>
                </form>
            </div>
            <div>
                <Image src="/assets/images/hero-image.png" width={800} height={750} alt=""/>
            </div>
        </div>

        {/* <!-- PARTNERS SECTION --> */}
        <div className="flex items-center py-48 justify-between">
            <Image src="/assets/images/partner01.png" width={172} height={58} alt=""/>
            <Image src="/assets/images/partner02.png" width={119} height={88} alt=""/>
            <Image src="/assets/images/partner03.png" width={179} height={69} alt=""/>
            <Image src="/assets/images/partner04.png" width={168} height={49} alt=""/>
            <Image src="/assets/images/partner05.png" width={258} height={56} alt=""/>
            <Image src="/assets/images/partner06.png" width={188} height={58} alt=""/>
        </div>
    </div>
    
    {/* <!-- Your search ends here  --> */}
    <div className="px-20 mb-24 relative cardStacks" ref={main}>
        <p className="text-center text-6xl font-black text-[#171A46]">Your search ends here</p>
        <div className="mt-12">
            <ul class="flex items-center justify-center gap-x-24">
                <li class="font-medium text-base text-[#878787] py-7 px-5 button-1 rounded-[58px]">500+ Digital activity</li>
                <li class="font-medium text-base text-[#878787] py-7 px-5 button-2 rounded-[58px]">25-years track Record</li>
                <li class="font-medium text-base text-[#878787] py-7 px-5 button-3 rounded-[58px]">1,000s of Reviews</li>
                <li class="font-medium text-base text-[#878787] py-7 px-5 button-4 rounded-[58px]">inhouse Technology</li>
            </ul>
        </div>
        <div className="relative w-full mt-16 mb-24">
            <div className="absolute bg-[#FECE32] rounded-[64px] inset-x-0 h-[740px] cardStack-1">
                <div className="flex items-center pt-16 px-32 justify-between">
                    <div>
                        <p className="text-7xl text-white font-black max-w-[460px]">In House Technology</p>
                        <p className="text-2xl text-white font-normal max-w-[530px] my-11">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                        {/* <!-- <p className="text-[#a769d380] font-black text-9xl">2x Revenue</p> --> */}
                    </div>
                    <div>
                        <Image src="/assets/images/benefits.webp.png" width={749} height={598} alt=""/>
                    </div>
                </div>
            </div>
            <div className="absolute bg-[#FFAF77] rounded-[64px] inset-x-0 h-[740px] top-[30px] cardStack-2">
                <div className="flex items-center pt-16 px-32 justify-between">
                    <div>
                        <p className="text-7xl text-white font-black max-w-[460px]">In House Technology</p>
                        <p className="text-2xl text-white font-normal max-w-[530px] my-11">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                        {/* <!-- <p className="text-[#a769d380] font-black text-9xl">2x Revenue</p> --> */}
                    </div>
                    <div>
                        <Image src="/assets/images/benefits.webp.png" width={749} height={598} alt=""/>
                    </div>
                </div>
            </div>
            <div className="absolute bg-[#92ABFC] rounded-[64px] inset-x-0 h-[740px] top-[60px] cardStack-3">
                <div className="flex items-center pt-16 px-32 justify-between">
                    <div>
                        <p className="text-7xl text-white font-black max-w-[460px]">In House Technology</p>
                        <p className="text-2xl text-white font-normal max-w-[530px] my-11">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                        {/* <!-- <p className="text-[#a769d380] font-black text-9xl">2x Revenue</p> --> */}
                    </div>
                    <div>
                        <Image src="/assets/images/benefits.webp.png" width={749} height={598} alt=""/>
                    </div>
                </div>
            </div>
            <div className="relative bg-[#BA83E1] rounded-[64px] inset-x-0 h-[740px] top-[90px] cardStack-4">
                <div className="flex items-center pt-16 px-32 justify-between">
                    <div>
                        <p className="text-7xl text-white font-black max-w-[460px]">In House Technology</p>
                        <p className="text-2xl text-white font-normal max-w-[530px] my-11">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                        {/* <!-- <p className="text-[#a769d380] font-black text-9xl">2x Revenue</p> --> */}
                    </div>
                    <div>
                        <Image src="/assets/images/benefits.webp.png" width={749} height={598} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Our Services --> */}
    <div className="pt-28">
        <div className="border-t border-[#BDBDBD]"></div>
        <div className="px-48">
            <div className="grid grid-cols-3">
                <div className="border-r border-[#BDBDBD]">
                    <p className="text-[#171A46] text-6xl font-black mt-32">Our Services</p>
                    <p className="text-2xl text-[#878787] my-12">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                    <button className="bg-[#BA83E1] rounded-[58px] py-4 px-6 text-white text-base font-medium">inhouse Technology <span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="inline invert brightness-0" alt=""/></span></button>
                </div>
                <div className="border-r border-[#BDBDBD]">
                    <div className="px-6 py-20 border-b border-[#BDBDBD]">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Digital Marketing</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-01.png" width={300} height={237} alt=""/>
                        </div>
                    </div>
                    <div className="px-6 py-20 border-b border-[#BDBDBD]">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Search Engine optimization</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-03.png" width={240} height={168} className="mt-11" alt=""/>
                        </div>
                    </div>
                    <div className="px-6 py-20 border-b border-[#BDBDBD]">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Designs & Animation</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-05.png" width={194} height={128} className="mt-11" alt=""/>
                        </div>
                    </div>
                    <div className="px-6 py-20">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Mobile & App Development</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-07.png" width={137} height={150} className="mt-11" alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-6 py-20 border-b border-[#BDBDBD]">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Web Development</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-02.png" width={244} height={154} style={{height: "237px"}} alt=""/>
                        </div>
                    </div>
                    <div className="px-6 py-20 border-b border-[#BDBDBD]">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Social Media</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-04.png" width={276} height={169} className="mt-11" style={{height: "168px"}} alt=""/>
                        </div>
                    </div>
                    <div className="px-6 py-20 border-b border-[#BDBDBD]">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Amazon Services</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-06.png" width={218} height={79} className="mt-11" style={{height: "128px"}} alt=""/>
                        </div>
                    </div>
                    <div className="px-6 py-20">
                        <div className="p-9">
                            <p className="text-[#5B5B5B] text-3xl font-bold">Artificial <br/> intelligence</p>
                            <p className="text- text-[#878787] text-2xl my-5">Choose Expobird as your digital marketing agency</p>
                            <button className="p-6 border border-[#ADADAD] rounded-[16px]"><span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="scale-75" alt=""/></span></button>
                            <Image src="/assets/images/service-animation-08.png" width={129} height={133} className="mt-11" style={{height: "150px"}} alt=""/>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </div>

    {/* <!-- Our Work--> */}
    <div className="px-48 my-48 relative">
        <div className="flex items-center">
            <div>
                <p className="text-[#171A46] text-[180px] font-black">Our</p>
            </div>
            <div>
                <Image src="/assets/images/work-image1.png" className='relative top-0' width={698} height={797}  alt=""/>
                <Image src="/assets/images/work-image2.png" className='absolute top-0 -z-10' width={698} height={797}  alt=""/>
                <Image src="/assets/images/work-image3.png" className='absolute top-0 -z-20' width={698} height={797}  alt=""/>
                <Image src="/assets/images/work-image4.png" className='absolute top-0 -z-30' width={698} height={797}  alt=""/>
            </div>
            <div>
                <p className="text-[#171A46] text-[180px] font-black">Work</p>
            </div>
        </div>
    </div>

    {/* <!-- In House Technology --> */}
    <div>
        <div className="grid grid-cols-2 items-center gap-x-24 px-48">
            <div>
                <p className="text-[80px] text-[#171A46] font-black leading-none">In House Technology</p>
                <p className="text-2xl text-[#878787] mt-11">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
            </div>
            <div>
                <Image src="/assets/images/benefits.webp.png" width={749} height={598}  alt=""/>
            </div>
        </div>
        <div className="technology-gradient pt-96">
            <div className="grid grid-cols-2 items-center gap-x-24 px-48">
                <div>
                    <Image src="/assets/images/benefits.webp.png" width={749} height={598} alt=""/>
                </div>
                <div>
                    <p className="text-[80px] text-white font-black leading-none">In House Technology</p>
                    <p className="text-2xl text-white mt-11">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-28">
                <p className="text-[80px] font-black text-white text-center">Get Free Seo <span className="underlined-svg relative">Audit</span></p>
                <p className="text-2xl text-white text-center pt-12">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                <form className="py-24 text-center">
                    <label className="block">
                      <input type="email" placeholder="Enter your site here" className="rounded-[40px] bg-transparent outline-white outline outline-1 border-none py-4 px-9 min-w-[840px] placeholder:text-white text-base text-white mr-8"/>
                      <button className="text-white text-base bg-[#FF9E44] rounded-[70px] py-4 px-9">Get A proposal <span>
                        <Image src="/assets/images/arrow-black.png" width={12} height={12} className="inline invert brightness-0" alt=""/></span></button>
                    </label>
                </form>
            </div>
        </div>
    </div>

    {/* <!-- By the numbers --> */}
    <div className="numbers-gradient">
        <div className="px-48 pt-48">
            <p className="font-black text-[80px] text-white text-center">By the numbers</p>
            <p className="text-[24px] text-white text-center py-[50px]">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
            <div className="text-center mb-[120px]"><button className="text-white bg-[#5D6BD9] rounded-[60px] px-[24px] py-[18px]">inhouse Technology <span><Image src="/assets/images/arrow-black.png" width={12} height={12} className="inline invert brightness-0" alt="" srcset=""/></span></button></div>
        </div>
        <div className="grid-cols-3 grid gap-x-[37px] numbers px-48 pb-48 relative z-50">
            <div className="col-span-1 bg-white px-[27px] py-[45px] rounded-[30px]">
                <p className="bg-[#5D6BD9] text-[34px] text-white font-black rounded-[45px] mb-[30px] py-[18px] pl-[60px] border border-[#606367]">Amazon</p>
                <p className="bg-white text-[34px] text-[#5D6BD9] font-black rounded-[45px] mb-[30px] py-[18px] pl-[60px] border border-[#606367] leading-none">Social Media <br/> Marketing</p>
                <p className="bg-white text-[34px] text-[#5D6BD9] font-black rounded-[45px] mb-[30px] py-[18px] pl-[60px] border border-[#606367] leading-none">Performance <br/> Marketing</p>
                <p className="bg-white text-[34px] text-[#5D6BD9] font-black rounded-[45px] mb-[30px] py-[18px] pl-[60px] border border-[#606367] leading-none">ROI</p>
            </div>
            <div className="col-span-2 bg-white py-[100px] rounded-[30px]">
                <p className="text-[240px] text-[#5D6BD9] font-black text-center leading-none mb-[35px]">200K+</p>
                <p className="text-[#5D6BD9] text-[40px] font-black text-center">World Wide</p>
            </div>
        </div>
    </div>

    {/* <!-- We excel in these departments --> */}
    <div className="numbers-gradient p-48">
        <p className="font-black text-[80px] text-white text-center">We excel in these departments</p>
        <p className="text-[24px] text-white text-center pt-[50px] pb-[122px]">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
        <div className="space-y-4">
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">01</p>
                <p className="text-[40px] font-black">HouseHold</p>
            </div>
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">02</p>
                <p className="text-[40px] font-black">Health & Beauty</p>
            </div>
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">03</p>
                <p className="text-[40px] font-black">Automobile</p>
            </div>
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">04</p>
                <p className="text-[40px] font-black">Home & Decor</p>
            </div>
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">05</p>
                <p className="text-[40px] font-black">Corporate</p>
            </div>
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">06</p>
                <p className="text-[40px] font-black">Real Estate</p>
            </div>
            <div className="flex bg-[#2e348857] rounded-[55px] items-center gap-x-[48px] py-[40px] hover:scale-110 transition-all duration-300 hover:bg-white hover:text-[#131638] text-white cursor-image-01">
                <p className="text-[34px] font-black pl-[100px]">07</p>
                <p className="text-[40px] font-black">FMCG</p>
            </div>
        </div>
    </div>

    {/* <!-- Pay as --> */}
    <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
            <div className="col-span-2 col-start-1 ml-[100px]"><p className="text-white font-black text-[250px]">Pay as</p></div>
            <div className="col-span-3 col-start-2"><p className="text-white font-black text-[250px]">you grow</p></div>
            <div className="col-span-2 max-w-[577px] ml-[100px] mt-[150px]"><p className="text-white text-[24px]">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p></div>
        </div>
    </div>
    <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
            <div className="col-span-3 col-start-2"><p className="text-white font-black text-[250px]">Effortless</p></div>
            <div className="col-span-3 col-start-1 ml-[100px]"><p className="text-white font-black text-[250px]">adoption</p></div>
            <div className="col-span-2 max-w-[577px] mt-[150px] col-start-3 ml-[100px]"><p className="text-white text-[24px] text-right">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p></div>
        </div>
    </div>
    <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
            <div className="col-span-3 col-start-1 ml-[100px]"><p className="text-white font-black text-[250px]">All sales</p></div>
            <div className="col-span-3 col-start-2"><p className="text-white font-black text-[250px]">compatible</p></div>
            <div className="col-span-2 max-w-[577px] ml-[100px] mt-[150px]"><p className="text-white text-[24px]">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p></div>
        </div>
    </div>
    <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
            <div className="col-span-3 col-start-2"><p className="text-white font-black text-[250px]">Secure by</p></div>
            <div className="col-span-3 col-start-1 ml-[100px]"><p className="text-white font-black text-[250px]">design</p></div>
            <div className="col-span-2 max-w-[577px] mt-[150px] col-start-3 ml-[100px]"><p className="text-white text-[24px] text-right">Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p></div>
        </div>
    </div>

    {/* <!-- Testimonial --> */}
    <div className="p-48">
        <Image src="/assets/images/testimonial.png" width={1120} height={551} className="mx-auto" alt="" srcset=""/>
        <div className="flex gap-x-[20px] justify-center mt-[50px] mb-[100px]">
            <div className="w-[70px] h-[70px] rounded-full bg-[#5D6BD9] flex justify-center items-center">
                <Image src="/assets/images/arrow-purple.png" width={34} height={24} className="invert brightness-0 rotate-180" alt=""/>
            </div>
            <div className="w-[70px] h-[70px] rounded-full bg-[#211C58] flex justify-center items-center">
                <Image src="/assets/images/arrow-purple.png" width={34} height={24} className="invert brightness-0" alt=""/>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="bg-[#211C58] rounded-[50px] p-[45px] min-h-[500px] flex flex-col">
                <p className="text-[28px] text-white text-center">Revenue increase</p>
                <p className="text-[43px] text-white font-medium text-center">+10%</p>
                <div className="flex mt-auto">
                    <Image src="/assets/images/curve.png" width={342} height={115} alt=""/>
                </div>
            </div>
            <div className="bg-[#5D6BD9] rounded-[50px] p-[45px] min-h-[500px] flex flex-col">
                <p className="text-[28px] text-white text-center">Average order value</p>
                <p className="text-[43px] text-white font-medium text-center">+10%</p>
                <div className="flex mt-auto">
                    <Image src="/assets/images/curve.png" width={342} height={115} className="invert brightness-0" alt=""/>
                </div>
            </div>
            <div className="bg-[#211C58] rounded-[50px] p-[45px] min-h-[500px flex flex-col">
                <p className="text-[28px] text-white text-center">Conversion rate</p>
                <p className="text-[43px] text-white font-medium text-center">30%</p>
                <div className="flex mt-auto">
                    <Image src="/assets/images/curve.png" width={342} height={115} alt=""/>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Meet Our Team Members --> */}
    <div className="bg-[#0A0B17] py-48">
        <p className="text-[100px] font-black text-white text-center">
            Meet Our Team Members
        </p>
        <div className="relative translate-x-2/4">
            <div className="flex">
                <div>
                    <p className="text-[35px] font-black text-white text-center">Shiraz Hussain</p>
                    <p className="text-[24px] text-white text-center">Director of Web development</p>
                    <Image src="/assets/images/director.png" width={433} height={734} alt=""/>
                </div>
                <Image src="/assets/images/director.png" width={433} height={734} className="saturate-0 scale-75 contrast-100" alt=""/>
                <Image src="/assets/images/director.png" width={433} height={734} className="saturate-0 scale-50 contrast-100" alt=""/>
                
            </div>
        </div>
    </div>

    {/* <!-- FAQs --> */}
    <div className="numbers-gradient p-48">
        <h6 className="text-[90px] font-black text-white mb-[120px]">Frequently Asked Questions</h6>
        <div className="accordion">
          <div className="accordion-item border-b-2 border-white relative">
            <button id="accordion-button-1" className="relative block text-left w-full text-[#a9b2f863] text-[46px] py-5 " aria-expanded="true"><span className="accordion-title text-[40px] font-semibold leading-none">Can Shopify integrate with other platforms and services?</span><span className="icon2" aria-hidden="true">1</span><span className="icon" aria-hidden="true">
                <Image src="/assets/images/arrow-purple.png" 
            width={34} height={24} className="inline" alt=""/>
            </span></button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">Yes, Shopify integrates with various other platforms and services, such as payment gateways, shipping carriers, and marketing tools.</p>
            </div>
          </div>
          <div className="accordion-item border-b-2 border-white">
            <button id="accordion-button-2" className="relative block text-left w-full text-[#a9b2f863] text-[46px] py-5 " aria-expanded="false"><span className="accordion-title text-[40px] font-semibold leading-none">Does Shopify support multiple languages and currencies?</span><span className="icon2" aria-hidden="true">2</span><span className="icon" aria-hidden="true"><Image src="/assets/images/arrow-purple.png" width={34} height={24} className="inline" alt=""/></span></button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
          <div className="accordion-item border-b-2 border-white">
            <button id="accordion-button-3" className="relative block text-left w-full text-[#a9b2f863] text-[46px] py-5 " aria-expanded="false"><span className="accordion-title text-[40px] font-semibold leading-none">Can Shopify integrate with other platforms and services?</span><span className="icon2" aria-hidden="true">3</span><span className="icon" aria-hidden="true"><Image src="/assets/images/arrow-purple.png" width={34} height={24} className="inline" alt=""/></span></button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
          <div className="accordion-item border-b-2 border-white">
            <button id="accordion-button-4" className="relative block text-left w-full text-[#a9b2f863] text-[46px] py-5 " aria-expanded="false"><span className="accordion-title text-[40px] font-semibold leading-none">Is Shopify suitable for small businesses?</span><span className="icon2" aria-hidden="true">4</span><span className="icon" aria-hidden="true"><Image src="/assets/images/arrow-purple.png" className="inline" width={34} height={24} alt=""/></span></button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
        </div>
    </div>

    {/* <!-- News and Blog --> */}
    <div className="p-48">
        <h6 className="text-[80px] text-[#151515] leading-none font-bold pb-24 text-center">News & Blogs</h6>
        <ul className="blog-hover-image relative">
        <li className="grid grid-cols-4 border-b border-[#000] items-center pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">I Ain’t  Savage</h6>
            <p className="text-[#151515] text-[24px] text-center">5 min Reading</p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
        </li>
        <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">I Ain’t  Savage</h6>
            <p className="text-[#151515] text-[24px] text-center">5 min Reading</p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
        </li>
        <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">I Ain’t  Savage</h6>
            <p className="text-[#151515] text-[24px] text-center">5 min Reading</p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
        </li>
        <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">I Ain’t  Savage</h6>
            <p className="text-[#151515] text-[24px] text-center">5 min Reading</p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
        </li>
        <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">I Ain’t  Savage</h6>
            <p className="text-[#151515] text-[24px] text-center">5 min Reading</p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
        </li>
        </ul>
    </div>

    {/* <!-- get a quote --> */}
    <div className="divide-x-2 grid grid-cols-9 divide-white relative items-start">
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[1] pb-96 text-end">g</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[2] pb-96 text-end">e</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[3] pb-96 text-end">t</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[4] pt-96 text-end">a</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[5] pt-40 pb-56 text-end">q</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[6] pt-40 pb-56 text-end">u</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[7] pt-40 pb-56 text-end">o</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[8] pt-40 pb-56 text-end">t</div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[9] pt-40 pb-56 text-end">e</div>
        <button className="block col-start-7 col-end-9 mx-[50px] py-[22px] font-medium text-center border-none bg-[#FF9E44] rounded-[117px] relative z-[10] -top-[200px] text-white text-[24px]">Get A proposal <span>
            <Image src="/assets/images/arrow-black.png" width={12} height={12} className="inline invert brightness-0 scale-110 ml-4" alt=""/>
            </span>
            </button>
    </div>

    {/* <!-- A Website Makes Money Even While You Are Asleep --> */}
    <div className="p-48">
        <p className="text-[#252424] text-[80px] font-black max-w-[1060px] mx-auto leading-none text-center">A Website Makes Money Even While You Are Asleep</p>
        <p className="text-[#252424] text-[24px] leading-none max-w-[620px] mx-auto text-center mt-[40px] mb-[60px]"> With us, you will never loose a customer again. We consult for free, so hop over for a call</p>
        <div className="flex items-center justify-center gap-x-[32px]">
            <div className="w-[128px] h-[128px] bg-[#453BB1] rounded-full flex items-center justify-center"><p className="text-center text-white text-[24px]">Call<br/>Now</p></div>
            <p className="text-[30px] font-black text-[#252424]">+1 (855)-588-7543</p>
        </div>
        <form className="py-[50px] text-center">
            <label className="flex items-center justify-center gap-x-[30px]">
              <input type="email" placeholder="Your Email" className="rounded-[70px] bg-transparent outline-[#453BB1] outline outline-1 border-none py-4 px-9 min-w-[515px] placeholder:text-[#252424] text-[24px] text-[#252424] font-medium"/>
              <div>
                <p className="text-[24px] text-[#252424]">sales@expobird.com</p>
                <p className="text-[24px] text-[#252424]">Or <Link href="#" className="underline">Go to Meet</Link></p>
            </div>
            </label>
        </form>
    </div>

    </>

  )
}

export default page