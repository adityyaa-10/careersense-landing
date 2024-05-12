"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";

function CardSlider() {
    var settings = {
        // className: "center",
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1200,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="/Card1.png" />
                </div>
                <div>
                    <img src="/Card1.png" />
                </div>
                <div>
                    <img src="/Card1.png" />
                </div>
                <div>
                    <img src="/Card1.png" />
                </div>

            </Slider>
        </div>
    );
}

export default CardSlider 
