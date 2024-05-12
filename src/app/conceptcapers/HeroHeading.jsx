"use client"
import CardSlider from './Slider';

const HeroHeading = () => {

    return (
        <div className='bg-[#F8E1CB] border-4 h-full border-[#161B32] '>
            <div className='relative  h-full flex justify-center min-w-full text-center'>
                <div className="absolute top-0 left-0 right-0 translate-y-[-50%] flex items-center justify-center text-center">
                    <h1 className='bg-[#161B32] max-w-min md:max-w-full text-white px-6 py-[1.13rem] text-4xl md:text-8xl tracking-tighter leading-[.79em] font-extrabold uppercase rounded-md '>CAREERSENSE</h1>
                </div>
            </div>
            <div className='pt-32 pb-24'>
                <CardSlider />
            </div>

            {/* Content */}
            <div className='max-w-[1080px] mx-auto px-6 flex flex-col items-center min-h-[30rem]'>
                <div className='max-w-[750px]'>
                    <p className='px-4 py-11 w-full text-[#161B32] tracking-tight leading-[70px] bg-white border-4 border-[#161B32] rounded text-6xl font-bold text-center '>
                        Smarter decisions for
                        better career outcomes
                    </p>
                </div>
                <div className='py-11 max-w-[750px] w-full'>
                    <p className='text-center text-[18px] md:text-[28px] leading-[50px] text-[#020617] font-medium tracking-tighter'>
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
