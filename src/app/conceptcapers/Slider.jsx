"use client";
import React from "react";

function CardSlider() {
    return (
        <div className="mx-auto py-5 overflow-x-hidden" style={{ position: 'relative', width: '100vw' }}>
            <div className="flex justify-center items-center" style={{ position: 'relative' }}>
                <img
                    className="h-32 md:h-full absolute"
                    style={{ left: 0, transform: 'translateX(-50%)' }}
                    src="/Card1.png"
                    alt="Card 1"
                />
                <img
                    className="h-32 md:h-full"
                    src="/Card2.png"
                    alt="Card 2"
                />
                <img
                    className="h-32 md:h-full absolute"
                    style={{ right: 0, transform: 'translateX(50%)' }}
                    src="/Card3.png"
                    alt="Card 3"
                />
            </div>
        </div>
    );
}

export default CardSlider;