"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EachCharacter from "./EachCharacter";
import Image from "next/image";
const LoremSlider = () => {
    const settings = {
        slidesToShow: 15,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 2100,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 14,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 13,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };
    return (
        <div className="mb-4 py-16 border-4 border-[#161B32] border-t-0 ">
            <div className="slider-container flex-wrap">
                <Slider {...settings}>
                    <div>
                        <EachCharacter char="L" bgColor={'bg-[#9BD5F5]'} />
                    </div>
                    <div>
                        <EachCharacter char="O" bgColor={'bg-[#9BD5F5]'} />
                    </div>
                    <div>
                        <EachCharacter char="R" bgColor={'bg-[#9BD5F5]'} />
                    </div>
                    <div>
                        <EachCharacter char="E" bgColor={'bg-[#9BD5F5]'} />
                    </div>
                    <div>
                        <EachCharacter char="M" bgColor={'bg-[#9BD5F5]'} />
                    </div>
                    <div>
                        <EachCharacter char="I" bgColor={'bg-[#9BD5F5]'} />
                    </div>
                    <div>
                        <EachCharacter char="P" />
                    </div>
                    <div>
                        <EachCharacter char="S" />
                    </div>
                    <div>
                        <EachCharacter char="U" />
                    </div>
                    <div>
                        <EachCharacter char="M" />
                    </div>
                    <div>
                        <EachCharacter char="L" />
                    </div>
                    <div>
                        <EachCharacter char="O" />
                    </div>
                    <div>
                        <EachCharacter char="R" />
                    </div>
                    <div>
                        <EachCharacter char="E" />
                    </div>
                    <div>
                        <EachCharacter char="M" />
                    </div>
                    <div>
                        <EachCharacter char="I" />
                    </div>
                    <div>
                        <EachCharacter char="P" />
                    </div>
                    <div>
                        <EachCharacter char="S" />
                    </div>
                    <div>
                        <EachCharacter char="U" />
                    </div>
                    <div>
                        <EachCharacter char="M" />
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default LoremSlider
