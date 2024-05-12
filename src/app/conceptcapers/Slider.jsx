"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";

function CardSlider() {
    var settings = {
        variableWidth: true,
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        initialSlide: 0,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1200,
        pauseOnHover: false,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="mr-4">
                    <img src="/Card1.png" />
                </div>
                <div className="mr-4">
                    <img src="/Card1.png" />
                </div>
                <div className="mr-4">
                    <img src="/Card1.png" />
                </div>
                <div className="mr-4">
                    <img src="/Card1.png" />
                </div>

            </Slider>
        </div>
    );
}

export default CardSlider 
