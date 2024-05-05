import MarqueeSection1 from "./MarqueeSection1";
import MarqueeSection2 from "./MarqueeSection2";
const ParaText = () => {
    return (
        <div className="bg-orange-50 py-24  tracking-tight text-gray-800">
            <div className="w-full gap-2 text-center flex flex-wrap justify-center items-center max-w-[845px] mx-auto">
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">We believe</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">that by</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">prioritizing</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">mental</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">well-being,</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">we can foster</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">a happier</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">and</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">more</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">productive</p>
                <p className="text-[40px] font-semibold leading-[120%] tracking-[-.02em]">workfoce</p>
            </div>
            <div className="pt-20 pb-32">
                <MarqueeSection1 />
                <div className="mt-5">
                    <MarqueeSection2 />
                </div>
            </div>
        </div>
    );
};

export default ParaText;
