"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";

function CardSlider() {
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <SingleCard />
                </div>
                <div>
                    <SingleCard />
                </div>
                <div>
                    <SingleCard />
                </div>
                <div>
                    <SingleCard />
                </div>
                <div>
                    <SingleCard />
                </div>
                <div>
                    <SingleCard />
                </div>
                <div>
                    <SingleCard />
                </div>
            </Slider>
        </div>
    );
}

export default CardSlider 
