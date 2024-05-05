"use client"
import CardSlider from './Slider';

const HeroHeading = () => {

    return (
        <div className='bg-[#9BD5F5] border-4 h-full border-[#161B32] '>
            <div className='relative  h-full flex justify-center min-w-full text-center'>
                <div className="absolute top-0 left-0 right-0 translate-y-[-50%] flex items-center justify-center text-center">
                    <h1 className='bg-[#161B32] max-w-min md:max-w-full text-white px-6 py-[1.13rem] text-4xl md:text-8xl tracking-tighter leading-[.79em] font-extrabold uppercase rounded-md '>Concept Capers!</h1>
                </div>
            </div>
            <div className='pt-24 pb-12'>
                <CardSlider />
            </div>

            {/* Content */}
            <div className='max-w-[1080px] mx-auto px-6 flex flex-col items-center min-h-[30rem]'>
                <div className='-rotate-2'>
                    <h1 className='p-4 text-[#161B32] bg-white border-4 border-[#161B32] rounded text-2xl font-bold text-center'>
                        A comical card game for creative folk
                    </h1>
                </div>
                <div className='py-11 px-4'>
                    <p className='text-center text-[20px] md:text-[30px] leading-[50px] text-[#161B32] font-medium tracking-tighter'>
                        <span className='font-bold'>Concept Capers</span>  is a quick play card game for creative industry aficionados,
                        and agency amateurs alike. Set inside <span className='font-bold'>OverBrand</span>, a fictional creative agency,
                        you and up to 3 others play as creatives racing to pitch the greatest idea!
                    </p>
                </div>
                <div className='px-4'>
                    <button className="flex font-medium items-center mt-3 mb-4 md:mb-0 text-2xl bg-[#161B32] border-4 border-[#161B32] px-4 py-2 rounded-full text-white tracking-tighter leading-10">
                        FIND OUT MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroHeading;
