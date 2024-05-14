"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";

function CardSlider() {
    var settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1200,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="ml-4">
                    <img src="/Card1.png" />
                </div>
                <div className="ml-4">
                    <img src="/Card1.png" />
                </div>
                <div className="ml-4">
                    <img src="/Card1.png" />
                </div>
                <div className="ml-4">
                    <img src="/Card1.png" />
                </div>

            </Slider>
        </div>
    );
}

export default CardSlider 
