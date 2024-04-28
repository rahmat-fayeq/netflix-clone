import React from "react";
import Header from "./components/Header";
import PageSection from "./components/PageSection";
import SignUpForm from "./components/SignUpForm";
import Image from "next/image";
import Accordion from "./components/Accordion";

function page() {
  return (
    <>
      <PageSection>
        <div
          id="HERO-SECTION"
          className=" HEROBG h-screen w-full pt-10  pl-[40px] pr-[40px] lg:pl-[95px] lg:pr-[95px]"
        >
          <Header />

          <div id="HERO-CONTAINER" className="w-full h-[90%]  CENTER flex-col">
            <h1 className="text-white font-bold text-[30px] md:text-[48px]">
              Unlimited movies, TV shows, and more
            </h1>

            <div className="text-white text-[18px] md:text-[25px] mb-8">
              Watch anywhere. Cancel anytime.
            </div>

            <p className="text-white text-[14px] md:text-[18px]">
              Ready to watch? Enter your email or mobile number to create or
              restart your membership.
            </p>
            <SignUpForm />
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="bg-[#070606] w-full h-[75vh] CENTER gap-14 flex-col md:flex-row">
          <div className="CENTER flex-col items-center">
            <h1 className="text-white font-bold text-[24px] md:text-[48px]">
              Enjoy on your TV
            </h1>

            <p className="text-white text-[16px] md:text-[20px] mb-8">
              Watch on Smart TVs, Playstation, Xbox, Chromecast,
              <br /> Apple TV, Blu-ray players, and more.
            </p>
          </div>

          <div id="TV-WRAPPER" className="relative z-10 ">
            <div className="min-w-[520px] min-h-[200px]">
              <Image
                className=" pointer-events-none z-20"
                width={510}
                height={500}
                alt=""
                src="/assets/tv.png"
              />
            </div>

            <video
              controls
              autoPlay
              loop
              className=" w-[320px] absolute top-0 left-[95px] -z-10"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            />
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="flex flex-col-reverse md:flex-row bg-[#070606] w-full h-[75vh] CENTER gap-14">
          <Image
            className=" pointer-events-none z-20"
            width={300}
            height={500}
            alt=""
            src="/assets/mobile2.png"
          />

          <div className="CENTER flex-col items-center">
            <h1 className="text-white font-bold text-[24px]  md:text-[48px]">
              Download your shows <br /> to watch offline
            </h1>

            <p className="text-white text-[16px] md:text-[20px] mb-8">
              Save your favorites easily and always have something <br /> to
              watch.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className=" bg-[#070606] w-full h-[75vh] CENTER gap-14 flex-col md:flex-row">
          <div className="CENTER flex-col items-center">
            <h1 className="text-white font-bold text-[24px] md:text-[48px]">
              Watch everywhere
            </h1>

            <p className="text-white text-[16px] md:text-[20px] mb-8">
              Stream unlimited movies and TV shows on your phone,
              <br /> tablet, laptop, and TV.
            </p>
          </div>

          <div id="TV-WRAPPER" className="relative z-10 ">
            <div className="min-w-[520px] min-h-[200px]">
              <Image
                className=" pointer-events-none z-20"
                width={510}
                height={500}
                alt=""
                src="/assets/tv.png"
              />
            </div>

            <video
              controls
              autoPlay
              loop
              className=" w-[320px] absolute top-0 left-[95px] -z-10"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            />
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className=" bg-[#070606] w-full h-[75vh] CENTER gap-14 flex flex-col">
          <Accordion />
        </div>
      </PageSection>
      <PageSection>
        <div
          id="HERO-SECTION"
          className="bg-[#070606] w-full p-10  pl-[40px] pr-[40px] lg:pl-[95px] lg:pr-[95px]"
        >
          <div id="HERO-CONTAINER" className=" w-full h-[20%]  CENTER flex-col">
            <p className="text-white text-[18px]">
              Ready to watch? Enter your email or mobile number to create or
              restart your membership.
            </p>
            <SignUpForm />
          </div>
        </div>
      </PageSection>
    </>
  );
}

export default page;
