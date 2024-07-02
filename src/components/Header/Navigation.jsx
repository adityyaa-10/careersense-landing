"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`text-gray-600`}>
      <div className="mx-auto flex flex-wrap items-center pt-3">
        <button
          className={`${scrolling ? "hidden" : "flex"} mb-4 mt-3 hidden items-center justify-between rounded-full border-4 border-[#161B32] bg-[#161B32] px-4 py-2 text-2xl font-medium leading-10 tracking-tighter text-white md:mb-0 lg:flex`}
        >
          BUY THE GAME
        </button>
        <nav className="mx-auto mt-5 max-w-lg flex-wrap items-center justify-center text-base md:flex">
          <div className="mb-4 flex items-center rounded-full border-4 border-[#161B32] px-6 py-3 text-2xl font-medium leading-10 tracking-tighter text-[#161B32] md:mb-0">
            <div className="mx-8">WORK</div>
            <div className="hidden md:mr-8 md:flex">
              <Image src={"/cclogo.png"} width={80} height={80} />
            </div>
            <div>
              <button className="flex items-center rounded-full border-4 border-[#161B32] bg-[#161B32] px-5 text-2xl font-medium leading-10 tracking-tighter text-white md:mb-0">
                PLAY
              </button>
            </div>
          </div>
        </nav>
        <button
          className={`${scrolling ? "hidden" : "flex"} mb-4 mt-3 hidden items-center rounded-full border-4 border-[#161B32] bg-[#161B32] px-4 py-2 text-2xl font-medium leading-10 tracking-tighter text-white md:mb-0 lg:flex`}
        >
          Get a sneak peek!
        </button>
      </div>
    </header>
  );
};

export default Navigation;
