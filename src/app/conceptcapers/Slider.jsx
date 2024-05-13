"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";

function CardSlider() {
    var settings = {
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: true,
        rows: 1,
        speed: 5000,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1200,
        pauseOnHover: false,
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
