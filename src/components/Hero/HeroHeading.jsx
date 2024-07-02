"use client";
import CardSlider from "./CardSlider";

const HeroHeading = () => {
  return (
    <div className="h-full border-4 border-[#161B32] bg-[#F8E1CB]">
      <div className="relative flex h-full min-w-full justify-center text-center">
        <div className="absolute left-0 right-0 top-0 flex translate-y-[-50%] items-center justify-center text-center">
          <h1 className="max-w-min rounded-md bg-[#161B32] px-6 py-[1.13rem] text-4xl font-extrabold uppercase leading-[.79em] tracking-tighter text-white md:max-w-full md:text-8xl">
            CAREERSENSE
          </h1>
        </div>
      </div>
      <div className="pt-16 md:pt-32">
        <CardSlider />
      </div>

      {/* Content */}
      <div className="mx-auto mt-16 flex max-w-[1080px] flex-col items-center px-6 md:mt-24">
        <div className="max-w-[800px]">
          <p className="w-full rounded border-4 border-[#161B32] bg-white px-4 py-6 text-center text-3xl font-bold uppercase leading-8 tracking-[-0.03em] text-[#161B32] md:text-[3.25rem] md:leading-[90px] lg:py-11">
            Smarter decisions for better career outcomes
          </p>
        </div>
        <div className="w-full max-w-[820px] py-11">
          <p className="text-center text-[18px] font-medium leading-9 tracking-[-0.018em] text-[#020617] md:text-[28px] md:leading-[50px]">
            Making sure that the next generation of talent is more informed with
            advice, perspectives and guidance to become successful
          </p>
        </div>
        <div className="px-4 pb-20">
          <button className="mb-4 mt-3 flex items-center rounded-full border-4 border-[#161B32] bg-[#161B32] px-4 py-2 text-2xl font-medium leading-10 tracking-tighter text-white md:mb-0">
            FIND OUT MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeading;
