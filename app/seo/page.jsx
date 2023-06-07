import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import "@styles/style-static-page-4.css";

export const metadata = {
  title: "Seo - Expobird",
  description: "nextJs demo Application",
};

const page4 = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
      </Head>
      <Script
        src="/scripts/script-static-page-4.js"
        strategy="lazyOnload"
      ></Script>
      <div className="hero-gradient px-48 py-48 pb-64 rounded-b-[80px]">
        <p className="text-[24px] text-white font-medium mb-12 lowercase text-center">
          DIGITAL MARKETING THAT DRIVES REVENUE
        </p>
        <p className="text-[80px] text-white font-black max-w-[1000px] text-center mx-auto leading-none my-[50px]">
          Capture More Revenue From Search
        </p>
        <p className="text-white text-2xl max-w-[900px] mb-[70px] mx-auto text-center">
          Choose Expobird as your digital marketing agency and propel your
          business to new heights with our award-winning digital marketing
          services and proprietary technology platform.
        </p>
        <div className="text-center">
          <button className="text-[#171B47] text-base bg-[#FF9E44] rounded-[70px] py-4 px-9">
            Contact Us{" "}
            <span>
              <Image
                src="/assets/images/arrow-black.png"
                className="inline"
                alt=""
                height={12}
                width={12}
              />
            </span>
          </button>
        </div>
      </div>
      <div className="px-48 relative bottom-[250px]">
        <div className="flex justify-center">
          <Image
            src="/assets/images/seo-hero.png"
            alt="pic"
            height={801}
            width={1317}
          />
        </div>
      </div>
      <div className="hero-gradient p-48">
        <div className="grid grid-cols-12 gap-x-36">
          <div className="col-span-6">
            <p className="text-white text-[80px] font-black mb-[50px]">
              So, Why SEO?
            </p>
            <p className="text-white text-[24px]">
              If you’re looking for serious business growth, SEO, or search
              engine optimization, is the strategy for you.
            </p>
            <p className="text-white text-[24px] my-[20px]">
              What is SEO? SEO is a digital marketing strategy that helps your
              website appear in relevant search results in search engines like
              Google, bringing more qualified traffic to your website. It
              involves various techniques, from using keywords on your pages to
              earning links to your site.
            </p>
            <p className="text-white text-[24px]">
              A custom SEO campaign from WebFX provides an all-in-one solution
              to SEO (on-page SEO, off-page SEO, and technical SEO), so your
              most valuable audience finds you online without you investing
              hours of work.
            </p>
          </div>
          <div className="col-span-6">
            <Image
              src="/assets/images/why-seo.png"
              height={588}
              width={720}
              alt="img1"
            />
          </div>
        </div>
      </div>
      <div className="pt-28">
        <div className="border-t border-[#BDBDBD]"></div>
        <div className="px-48">
          <div className="grid grid-cols-3">
            <div className="border-r border-[#BDBDBD]">
              <p className="text-[#171A46] text-6xl font-black mt-32">
                SEO Services With Seismic Results
              </p>
              <p className="text-2xl text-[#878787] my-12 max-w-[444px]">
                Choose Expobird as your digital marketing agency and propel your
                business to new heights with our award-winning digital marketing
                services and proprietary technology platform.
              </p>
              <button className="bg-[#BA83E1] rounded-[58px] py-4 px-6 text-white text-base font-medium">
                inhouse Technology{" "}
                <span>
                  <Image
                    src="/assets/images/arrow-black.png"
                    className="inline invert brightness-0"
                    height={12}
                    width={12}
                    alt=""
                  />
                </span>
              </button>
            </div>
            <div className="border-r border-[#BDBDBD]">
              <div className="px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9">
                  <p className="text-[#5B5B5B] text-3xl font-bold">
                    Keyword Research Services
                  </p>
                  <p className="text- text-[#878787] text-2xl my-5">
                    You surely have a remarkable idea for Android solution
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src="/assets/images/arrow-black.png"
                        className="scale-75"
                        alt=""
                        height={12}
                        width={12}
                      />
                    </span>
                  </button>
                  <Image
                    src="/assets/images/service-animation-01.png"
                    height={237}
                    width={300}
                    alt=""
                  />
                </div>
              </div>
              <div className="px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9">
                  <p className="text-[#5B5B5B] text-3xl font-bold">
                    SEO Audit Services
                  </p>
                  <p className="text- text-[#878787] text-2xl my-5">
                    Want to reach a wide audience? We get that and we will
                    gladly help.
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src="/assets/images/arrow-black.png"
                        height={12}
                        width={12}
                        alt=""
                      />
                    </span>
                  </button>
                  <Image
                    src="/assets/images/service-animation-03.png"
                    height={168}
                    width={240}
                    className="mt-11"
                    alt=""
                  />
                </div>
              </div>
              <div className="px-6 py-20">
                <div className="p-9">
                  <p className="text-[#5B5B5B] text-3xl font-bold">
                    SEO Content Services
                  </p>
                  <p className="text- text-[#878787] text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src="/assets/images/arrow-black.png"
                        className="scale-75"
                        alt=""
                        height={12}
                        width={12}
                      />
                    </span>
                  </button>
                  <Image
                    src="/assets/images/service-animation-05.png"
                    className="mt-11"
                    alt=""
                    height={128}
                    width={194}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9">
                  <p className="text-[#5B5B5B] text-3xl font-bold">
                    SEO Audit Services
                  </p>
                  <p className="text- text-[#878787] text-2xl my-5">
                    This means that if you aim to enter the world of Apple apps
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src="/assets/images/arrow-black.png"
                        className="scale-75"
                        height={12}
                        width={12}
                        alt=""
                      />
                    </span>
                  </button>
                  <Image
                    src="/assets/images/service-animation-02.png"
                    alt=""
                    height={237}
                    width={376}
                  />
                </div>
              </div>
              <div className="px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9">
                  <p className="text-[#5B5B5B] text-3xl font-bold">
                    Off-Page SEO Services
                  </p>
                  <p className="text- text-[#878787] text-2xl my-5">
                    Crafting engaging and flawless custom mobile apps is in our
                    blood.
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src="/assets/images/arrow-black.png"
                        className="scale-75"
                        alt=""
                        height={12}
                        width={12}
                      />
                    </span>
                  </button>
                  <Image
                    src="/assets/images/service-animation-04.png"
                    className="mt-11"
                    height={168}
                    width={274}
                    alt=""
                  />
                </div>
              </div>
              <div className="px-6 py-20">
                <div className="p-9">
                  <p className="text-[#5B5B5B] text-3xl font-bold">
                    SEO Strategy & Analytics
                  </p>
                  <p className="text- text-[#878787] text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src="/assets/images/arrow-black.png"
                        className="scale-75"
                        alt=""
                        height={12}
                        width={12}
                      />
                    </span>
                  </button>
                  <Image
                    src="/assets/images/service-animation-06.png"
                    className="mt-11"
                    alt=""
                    height={128}
                    width={353}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-48 my-48">
        <div className="flex items-center">
          <div>
            <p className="text-[#171A46] text-[180px] font-black">Our</p>
          </div>
          <div>
            <Image
              src="/assets/images/work-image.png"
              height={797}
              width={698}
              alt=""
            />
          </div>
          <div>
            <p className="text-[#171A46] text-[180px] font-black">Work</p>
          </div>
        </div>
      </div>
      <div className="py-[245px] bg-[#0A0B16]  free-audit-bg">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[80px] font-black text-white text-center">
            Get Free Seo <span className="underlined-svg relative">Audit</span>
          </p>
          <p className="text-[24px] text-white text-center py-12">
            Auditing your site allows your dedicated SEO expert to discover
            areas of improvement, as well as opportunities for your SEO
            strategy. That’s why our SEO specialists start with a technical SEO
            audit before building your plan
          </p>
          <p className="text-[24px] text-white text-center">
            As a part of your SEO audit, your dedicated account manager will
            look at the following:
          </p>
          <div className="flex justify-evenly my-20">
            <p className="text-[24px] text-[#FFB800]">Your website</p>
            <p className="text-[24px] text-[#FFB800]">Your website analytics</p>
            <p className="text-[24px] text-[#FFB800]">
              Your Google Search Console data
            </p>
            <p className="text-[24px] text-[#FFB800]">And more</p>
          </div>
          <form className="pb-24 text-center">
            <label className="block relative">
              <span className="absolute inset-y-0 right-0 flex items-center z-50">
                <button className="text-black text-[24px] bg-[#FFB800] rounded-[70px] py-4 px-12 font-medium border-[#FFB800] border">
                  Get A proposal
                  <span>
                    <Image
                      src="/assets/images/arrow-black.png"
                      height={20}
                      width={20}
                      className="inline w-[20px] ml-2"
                      alt=""
                    />
                  </span>
                </button>
              </span>
              <input
                type="email"
                placeholder="Enter your site here"
                className="rounded-[40px] bg-transparent outline-white outline outline-1 border-none py-4 px-9 min-w-[840px] placeholder:text-white text-white mr-8 text-[24px] font-medium"
              />
            </label>
          </form>
        </div>
      </div>
      <div className="technology-gradient py-48">
        <div className="grid grid-cols-2 items-center gap-x-24 px-48">
          <div>
            <p className="text-[80px] text-[#171A46] font-black leading-none">
              How to choose best <br /> SEO management company
            </p>
            <p className="text-2xl text-[#878787] mt-11 max-w-[600px]">
              Mobile user experience is believed to have an abundance of
              usability issues that potentially cause an increase in uninstall
              rate. Employing user-centered design, we overpower challenges,
              offering users optimal usability and accessibility.
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/benefits2.png"
              height={722}
              width={355}
              className="mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="mt-48">
          <div className="grid px-48 grid-cols-12">
            <div className="sticky h-fit z-50 top-0 col-span-6">
              <img
                src="/assets/images/benefits2.png"
                height={722}
                width={355}
                alt=""
              />
            </div>
            <div className="col-span-6">
              <div>
                <p className="text-[80px] text-white font-black leading-none">
                  They’re <br /> transparent
                </p>
                <p className="text-2xl text-white mt-11">
                  Reducing the number of steps and offering feature education
                  throughout the onboarding, we instantly reveal the true value
                  of your mobile app.
                </p>
              </div>
              <div className="my-[260px]">
                <p className="text-[80px] text-white font-black leading-none">
                  They have over <br /> 100 testimonials
                </p>
                <p className="text-2xl text-white mt-11">
                  Playing around the main functionalities, keeping consistency,
                  and communicating the current location, we streamline the
                  navigation flow.
                </p>
              </div>
              <div>
                <p className="text-[80px] text-white font-black leading-none">
                  They have an <br /> extensive trophy cabinet
                </p>
                <p className="text-2xl text-white mt-11">
                  Prioritizing content and using progressive disclosure, we
                  visualize the information that users need at each particular
                  step of their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container-horizontal">
        <div className="space-holder">
          <div className="sticky-horizontal">
            <div className="horizontal">
              <section role="feed" className="cards-horizontal">
                <article className="sample-card-horizontal numbers-gradient flex">
                  <div className="pl-48 self-center">
                    <p className="text-[80px] font-black text-white leading-none">
                      Work <br /> Process
                    </p>
                    <p className="text-[24px] text-white max-w-[500px] mt-[60px]">
                      We are a team of design and research experts with over ten
                      years of experience in improving businesses and peoples’
                      lives through smart design solutions
                    </p>
                  </div>
                </article>
                <article className="sample-card-horizontal numbers-gradient flex">
                  <div className="bg-[#0a0b1791] h-[750px] self-center w-[1240px] border-2 border-[#453BB1] rounded-[30px]">
                    <div className="flex justify-center items-center h-full">
                      <div>
                        <Image
                          src="/assets/images/handshake.png"
                          className="mb-[60px]"
                          height={158}
                          width={184}
                          alt=""
                        />
                        <div className="flex">
                          <p className="text-[#ffffff3d] font-bold text-[60px]">
                            01
                          </p>
                          <p className="font-black text-[60px] text-white leading-none mr-[60px] ml-[20px]">
                            Understanding <br /> User Needs
                          </p>
                          <p className="text-[24px] text-white max-w-[420px]">
                            We are a team of design and research experts with
                            over ten years of experience in improving businesses
                            and peoples’ lives through smart design solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="sample-card-horizontal numbers-gradient flex">
                  <div className="bg-[#0a0b1791] h-[750px] self-center w-[1240px] border-2 border-[#453BB1] rounded-[30px]">
                    <div className="flex justify-center items-center h-full">
                      <div>
                        <Image
                          src="/assets/images/handshake.png"
                          height={158}
                          width={184}
                          alt=""
                        />
                        <div className="flex">
                          <p className="text-[#ffffff3d] font-bold text-[60px]">
                            01
                          </p>
                          <p className="font-black text-[60px] text-white leading-none mr-[60px] ml-[20px]">
                            Understanding <br /> User Needs
                          </p>
                          <p className="text-[24px] text-white max-w-[420px]">
                            We are a team of design and research experts with
                            over ten years of experience in improving businesses
                            and peoples’ lives through smart design solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="sample-card-horizontal numbers-gradient flex">
                  <div className="bg-[#0a0b1791] h-[750px] self-center w-[1240px] border-2 border-[#453BB1] rounded-[30px]">
                    <div className="flex justify-center items-center h-full">
                      <div>
                        <Image
                          src="/assets/images/handshake.png"
                          height={158}
                          width={184}
                          alt=""
                        />
                        <div className="flex">
                          <p className="text-[#ffffff3d] font-bold text-[60px]">
                            01
                          </p>
                          <p className="font-black text-[60px] text-white leading-none mr-[60px] ml-[20px]">
                            Understanding <br /> User Needs
                          </p>
                          <p className="text-[24px] text-white max-w-[420px]">
                            We are a team of design and research experts with
                            over ten years of experience in improving businesses
                            and peoples’ lives through smart design solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>

      <div className="numbers-gradient p-48">
        <p className="font-black text-[80px] text-white text-center">
          We excel in these departments
        </p>
        <p className="text-[24px] text-white text-center pt-[50px] pb-[122px]">
          Choose Expobird as your digital marketing agency and propel your
          business to new heights with our award-winning digital marketing
          services and proprietary technology platform.
        </p>
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

      <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
          <div className="col-span-2 col-start-1 ml-[100px]">
            <p className="text-white font-black text-[250px]">Pay as</p>
          </div>
          <div className="col-span-3 col-start-2">
            <p className="text-white font-black text-[250px]">you grow</p>
          </div>
          <div className="col-span-2 max-w-[577px] ml-[100px] mt-[150px]">
            <p className="text-white text-[24px]">
              Choose Expobird as your digital marketing agency and propel your
              business to new heights with our award-winning digital marketing
              services and proprietary technology platform.
            </p>
          </div>
        </div>
      </div>
      <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
          <div className="col-span-3 col-start-2">
            <p className="text-white font-black text-[250px]">Effortless</p>
          </div>
          <div className="col-span-3 col-start-1 ml-[100px]">
            <p className="text-white font-black text-[250px]">adoption</p>
          </div>
          <div className="col-span-2 max-w-[577px] mt-[150px] col-start-3 ml-[100px]">
            <p className="text-white text-[24px] text-right">
              Choose Expobird as your digital marketing agency and propel your
              business to new heights with our award-winning digital marketing
              services and proprietary technology platform.
            </p>
          </div>
        </div>
      </div>
      <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
          <div className="col-span-3 col-start-1 ml-[100px]">
            <p className="text-white font-black text-[250px]">All sales</p>
          </div>
          <div className="col-span-3 col-start-2">
            <p className="text-white font-black text-[250px]">compatible</p>
          </div>
          <div className="col-span-2 max-w-[577px] ml-[100px] mt-[150px]">
            <p className="text-white text-[24px]">
              Choose Expobird as your digital marketing agency and propel your
              business to new heights with our award-winning digital marketing
              services and proprietary technology platform.
            </p>
          </div>
        </div>
      </div>
      <div className="numbers-gradient py-48">
        <div className="grid grid-flow-row grid-cols-4">
          <div className="col-span-3 col-start-2">
            <p className="text-white font-black text-[250px]">Secure by</p>
          </div>
          <div className="col-span-3 col-start-1 ml-[100px]">
            <p className="text-white font-black text-[250px]">design</p>
          </div>
          <div className="col-span-2 max-w-[577px] mt-[150px] col-start-3 ml-[100px]">
            <p className="text-white text-[24px] text-right">
              Choose Expobird as your digital marketing agency and propel your
              business to new heights with our award-winning digital marketing
              services and proprietary technology platform.
            </p>
          </div>
        </div>
      </div>
      <div className="p-48">
        <Image
          src="/assets/images/testimonial.png"
          height={551}
          width={1120}
          className="mx-auto"
          alt=""
        />
        <div className="flex gap-x-[20px] justify-center mt-[50px] mb-[100px]">
          <div className="w-[70px] h-[70px] rounded-full bg-[#5D6BD9] flex justify-center items-center">
            <Image
              src="/assets/images/arrow-purple.png"
              width={34}
              height={24}
              className="invert brightness-0 rotate-180"
              alt=""
            />
          </div>
          <div className="w-[70px] h-[70px] rounded-full bg-[#211C58] flex justify-center items-center">
            <Image
              src="/assets/images/arrow-purple.png"
              height={24}
              width={34}
              className="invert brightness-0"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-[#211C58] rounded-[50px] p-[45px] min-h-[500px] flex flex-col">
            <p className="text-[28px] text-white text-center">
              Revenue increase
            </p>
            <p className="text-[43px] text-white font-medium text-center">
              +10%
            </p>
            <div className="flex mt-auto">
              <Image
                src="/assets/images/curve.png"
                height={115}
                width={342}
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#5D6BD9] rounded-[50px] p-[45px] min-h-[500px] flex flex-col">
            <p className="text-[28px] text-white text-center">
              Average order value
            </p>
            <p className="text-[43px] text-white font-medium text-center">
              +10%
            </p>
            <div className="flex mt-auto">
              <Image
                src="/assets/images/curve.png"
                height={115}
                width={342}
                className="invert brightness-0"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#211C58] rounded-[50px] p-[45px] min-h-[500px] flex flex-col">
            <p className="text-[28px] text-white text-center">
              Conversion rate
            </p>
            <p className="text-[43px] text-white font-medium text-center">
              30%
            </p>
            <div className="flex mt-auto">
              <Image
                src="/assets/images/curve.png"
                height={115}
                width={342}
                alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0A0B17] py-48 overflow-hidden">
        <p className="text-[100px] font-black text-white text-center">
          Meet Our Team Members
        </p>
        <div className="relative translate-x-2/4">
          <div className="flex">
            <div>
              <p className="text-[35px] font-black text-white text-center">
                Shiraz Hussain
              </p>
              <p className="text-[24px] text-white text-center">
                Director of Web development
              </p>
              <Image
                src="/assets/images/director.png"
                height={734}
                width={433}
                alt=""
              />
            </div>
            <Image
              src="/assets/images/director.png"
              height={734}
              width={433}
              className="saturate-0 scale-75 contrast-100"
              alt=""
            />
            <Image
              src="/assets/images/director.png"
              height={734}
              width={433}
              className="saturate-0 scale-50 contrast-100"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="numbers-gradient p-48">
        <h6 className="text-[90px] font-black text-white mb-[120px]">
          Frequently Asked Questions
        </h6>
        <div className="accordion">
          <div className="accordion-item border-b-2 border-white relative">
            <button
              id="accordion-button-1"
              className="relative block text-left w-full text-[#a9b2f863] text-[46px]	py-5 "
              aria-expanded="true"
            >
              <span className="accordion-title text-[40px] font-semibold leading-none ">
                Can Shopify integrate with other platforms and services?
              </span>
              <span className="icon2" aria-hidden="true">
                1
              </span>
              <span className="icon" aria-hidden="true">
                <Image
                  src="/assets/images/arrow-purple.png"
                  height={24}
                  width={34}
                  className="inline"
                  alt=""
                />
              </span>
            </button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">
                Yes, Shopify integrates with various other platforms and
                services, such as payment gateways, shipping carriers, and
                marketing tools.
              </p>
            </div>
          </div>
          <div className="accordion-item border-b-2 border-white">
            <button
              id="accordion-button-2"
              className="relative block text-left w-full text-[#a9b2f863] text-[46px]	py-5 "
              aria-expanded="false"
            >
              <span className="accordion-title text-[40px] font-semibold leading-none">
                Does Shopify support multiple languages and currencies?
              </span>
              <span className="icon2" aria-hidden="true">
                2
              </span>
              <span className="icon" aria-hidden="true">
                <Image
                  src="/assets/images/arrow-purple.png"
                  height={24}
                  width={34}
                  className="inline"
                  alt=""
                />
              </span>
            </button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item border-b-2 border-white">
            <button
              id="accordion-button-3"
              className="relative block text-left w-full text-[#a9b2f863] text-[46px]	py-5 "
              aria-expanded="false"
            >
              <span className="accordion-title text-[40px] font-semibold leading-none">
                Can Shopify integrate with other platforms and services?
              </span>
              <span className="icon2" aria-hidden="true">
                3
              </span>
              <span className="icon" aria-hidden="true">
                <Image
                  src="/assets/images/arrow-purple.png"
                  height={24}
                  width={34}
                  className="inline"
                  alt=""
                />
              </span>
            </button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="accordion-item border-b-2 border-white">
            <button
              id="accordion-button-4"
              className="relative block text-left w-full text-[#a9b2f863] text-[46px]	py-5 "
              aria-expanded="false"
            >
              <span className="accordion-title text-[40px] font-semibold leading-none">
                Is Shopify suitable for small businesses?
              </span>
              <span className="icon2" aria-hidden="true">
                4
              </span>
              <span className="icon" aria-hidden="true">
                <Image
                  src="/assets/images/arrow-purple.png"
                  height={24}
                  width={34}
                  className="inline"
                  alt=""
                />
              </span>
            </button>
            <div className="accordion-content">
              <p className="text-[24px] text-white mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-48">
        <h6 className="text-[80px] text-[#151515] leading-none font-bold pb-24 text-center">
          News & Blogs
        </h6>
        <ul className="blog-hover-image relative">
          <li className="grid grid-cols-4 border-b border-[#000] items-center pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">
              I Ain’t Savage
            </h6>
            <p className="text-[#151515] text-[24px] text-center">
              5 min Reading
            </p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
          </li>
          <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">
              I Ain’t Savage
            </h6>
            <p className="text-[#151515] text-[24px] text-center">
              5 min Reading
            </p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
          </li>
          <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">
              I Ain’t Savage
            </h6>
            <p className="text-[#151515] text-[24px] text-center">
              5 min Reading
            </p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
          </li>
          <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">
              I Ain’t Savage
            </h6>
            <p className="text-[#151515] text-[24px] text-center">
              5 min Reading
            </p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
          </li>
          <li className="grid grid-cols-4 border-b border-[#000] items-center pt-[60px] pb-[40px] blog-item">
            <h6 className="col-span-2 text-[56px] font-semibold text-[#151515] leading-none">
              I Ain’t Savage
            </h6>
            <p className="text-[#151515] text-[24px] text-center">
              5 min Reading
            </p>
            <p className="text-[#151515] text-[43px] text-center">Blog</p>
          </li>
        </ul>
      </div>
      <div className="divide-x-2 grid grid-cols-9 divide-white relative items-start overflow-x-hidden">
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[1] pb-96 text-end">
          g
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[2] pb-96 text-end">
          e
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[3] pb-96 text-end">
          t
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[4] pt-96 text-end">
          a
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[5] pt-40 pb-56 text-end">
          q
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[6] pt-40 pb-56 text-end">
          u
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[7] pt-40 pb-56 text-end">
          o
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[8] pt-40 pb-56 text-end">
          t
        </div>
        <div className="font-black  bg-[#9399E9] text-[400px] text-white relative z-[9] pt-40 pb-56 text-end">
          e
        </div>
        <button className="block col-start-7 col-end-9 mx-[50px] py-[22px] font-medium text-center border-none bg-[#FF9E44] rounded-[117px] relative z-[10] -top-[200px] text-white text-[24px]">
          Get A proposal{" "}
          <span>
            <Image
              src="/assets/images/arrow-black.png"
              height={12}
              width={12}
              alt=""
            />
          </span>
        </button>
      </div>
      <div className="p-48">
        <p className="text-[#252424] text-[80px] font-black max-w-[1060px] mx-auto leading-none text-center">
          A Website Makes Money Even While You Are Asleep
        </p>
        <p className="text-[#252424] text-[24px] leading-none max-w-[620px] mx-auto text-center mt-[40px] mb-[60px]">
          {" "}
          With us, you will never loose a customer again. We consult for free,
          so hop over for a call
        </p>
        <div className="flex items-center justify-center gap-x-[32px]">
          <div className="w-[128px] h-[128px] bg-[#453BB1] rounded-full flex items-center justify-center">
            <p className="text-center text-white text-[24px]">
              Call
              <br />
              Now
            </p>
          </div>
          <p className="text-[30px] font-black text-[#252424]">
            +1 (855)-588-7543
          </p>
        </div>
        <form className="py-[50px] text-center">
          <label className="flex items-center justify-center gap-x-[30px]">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-[70px] bg-transparent outline-[#453BB1] outline outline-1 border-none py-4 px-9 min-w-[515px] placeholder:text-[#252424] text-[24px] text-[#252424] font-medium"
            />
            <div>
              <p className="text-[24px] text-[#252424]">sales@expobird.com</p>
              <p className="text-[24px] text-[#252424]">
                Or{" "}
                <Link href="#" className="underline">
                  Go to Meet
                </Link>
              </p>
            </div>
          </label>
        </form>
      </div>
    </>
  );
};

export default page4;
