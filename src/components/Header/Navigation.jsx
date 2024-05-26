"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navigation = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolling(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`text-gray-600`}>
            <div className="pt-3 mx-auto flex flex-wrap items-center">
                <button className={`${scrolling ? 'hidden' : 'flex'} hidden lg:flex justify-between font-medium items-center mt-3 mb-4 md:mb-0 text-2xl bg-[#161B32] border-4 border-[#161B32] px-4 py-2 rounded-full text-white tracking-tighter leading-10`}>
                    BUY THE GAME
                </button>
                <nav className="mx-auto md:flex flex-wrap mt-5 items-center text-base justify-center max-w-lg">
                    <div className="py-3 px-6 flex font-medium items-center mb-4 md:mb-0 text-2xl border-4 border-[#161B32] rounded-full text-[#161B32] tracking-tighter leading-10">
                        <div className="mx-8">WORK</div>
                        <div className="hidden md:flex md:mr-8">
                            <Image src={'/cclogo.png'} width={80} height={80} />
                        </div>
                        <div>
                            <button className="flex font-medium items-center  md:mb-0 text-2xl bg-[#161B32] border-4 border-[#161B32] px-5 rounded-full text-white tracking-tighter leading-10">
                                PLAY
                            </button>
                        </div>
                    </div>
                </nav>
                <button className={`${scrolling ? 'hidden' : 'flex'} hidden lg:flex font-medium items-center mt-3 mb-4 md:mb-0 text-2xl bg-[#161B32] border-4 border-[#161B32] px-4 py-2 rounded-full text-white tracking-tighter leading-10`}>
                    Get a sneak peek!
                </button>
            </div>
        </header>
    );
};

export default Navigation;
