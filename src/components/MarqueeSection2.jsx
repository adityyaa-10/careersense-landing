"use client";
import Slider from "react-slick";
import MarqueeItem from "./MarqueeItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MarqueeSection1() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        rtl: true,
    };
    return (
        <div className="">
            <Slider {...settings}>
                <div className="pl-4 flex flex-none">
                    <MarqueeItem content={'ANXIETY'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'PTSD'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'ANOREXIA'} />
                </div>
                <div className="pl-4">
                    <MarqueeItem content={'DEPRESSION'} />
                </div>
            </Slider>
        </div>
    );
}

export default MarqueeSection1;
