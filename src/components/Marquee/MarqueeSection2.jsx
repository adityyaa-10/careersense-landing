"use client";
import Slider from "react-slick";
import MarqueeItem from "./MarqueeItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MarqueeSection1() {
    const settings = {
        variableWidth: true,
        centerMode: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        rtl: true,
        centerPadding: "20px",
    };
    return (
        <div className="mt-4 sm:mt-7">
            <Slider {...settings}>

                <div className="pl-4">
                    <MarqueeItem content={'MASTERS ABROAD'} bgColor={'bg-[#fbcb6e]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'TECH STACK'} bgColor={'bg-[#3bdc5e]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'JOBS'} bgColor={'bg-[#24201f]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'FAANG'} bgColor={'bg-[#3bb5dc]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'DECISIONS'} bgColor={'bg-[#e7713e]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'CAREER GUIDANCE'} bgColor={'bg-[#dc3b75]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'ED TECH'} bgColor={'bg-[#fbcb6e]'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'CAREER GOALS'} bgColor={'bg-[#3bdc5e]'} />
                </div>
            </Slider>
        </div>
    );
}

export default MarqueeSection1;
