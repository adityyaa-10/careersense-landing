"use client"
import CardSlider from './CardSlider';

const HeroHeading = () => {

    return (
        <div className='bg-[#F8E1CB] border-4 h-full border-[#161B32] '>
            <div className='relative h-full flex justify-center min-w-full text-center'>
                <div className="absolute top-0 left-0 right-0 translate-y-[-50%] flex items-center justify-center text-center">
                    <h1 className='bg-[#161B32] max-w-min md:max-w-full text-white px-6 py-[1.13rem] text-4xl md:text-8xl tracking-tighter leading-[.79em] font-extrabold uppercase rounded-md '>CAREERSENSE</h1>
                </div>
            </div>
            <div className='pt-16 md:pt-32'>
                <CardSlider />
            </div>

            {/* Content */}
            <div className='max-w-[1080px] mt-16 md:mt-24 mx-auto px-6 flex flex-col items-center'>
                <div className='max-w-[800px]'>
                    <p className='px-4 py-6 lg:py-11 w-full text-[#161B32] tracking-[-0.03em] uppercase leading-8 md:leading-[90px] bg-white border-4 border-[#161B32] rounded text-3xl md:text-[3.25rem] font-bold text-center '>
                        Smarter decisions for
                        better career outcomes
                    </p>
                </div>
                <div className='py-11 max-w-[820px] w-full'>
                    <p className='text-center text-[18px] md:text-[28px] leading-9 md:leading-[50px] text-[#020617] font-medium tracking-[-0.018em]'>
                        Making sure that the next generation of talent is more informed
                        with advice, perspectives and guidance to become successful
                    </p>

                </div>
                <div className='px-4 pb-20'>
                    <button className="flex font-medium items-center mt-3 mb-4 md:mb-0 text-2xl bg-[#161B32] border-4 border-[#161B32] px-4 py-2 rounded-full text-white tracking-tighter leading-10">
                        FIND OUT MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroHeading;
