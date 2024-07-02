"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EachCharacter from "./EachCharacter";
const LoremSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2100,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
    pauseOnHover: false,
  };
  return (
    <div className="mb-4 border-4 border-t-0 border-[#161B32] py-5 md:py-11">
      <div className="slider-container flex-wrap">
        <Slider {...settings}>
          <div>
            <EachCharacter char="L" hover={"hover:bg-[#9BD5F5]"} />
          </div>
          <div>
            <EachCharacter char="O" hover={"hover:bg-[#ff6680]"} />
          </div>
          <div>
            <EachCharacter char="R" hover={"hover:bg-[#7cff66]"} />
          </div>
          <div>
            <EachCharacter char="E" hover={"hover:bg-[#ae47b3]"} />
          </div>
          <div>
            <EachCharacter char="M" hover={"hover:bg-[#fff566]"} />
          </div>
          <div>
            <EachCharacter char="" />
          </div>
          <div>
            <EachCharacter char="I" hover={"hover:bg-[#8c61ff]"} />
          </div>
          <div>
            <EachCharacter char="P" hover={"hover:bg-[#f75d59]"} />
          </div>
          <div>
            <EachCharacter char="S" hover={"hover:bg-[#ffb0ad]"} />
          </div>
          <div>
            <EachCharacter char="U" hover={"hover:bg-[#f79a59]"} />
          </div>
          <div>
            <EachCharacter char="M" hover={"hover:bg-[#072448]"} />
          </div>
          <div>
            <EachCharacter char="" />
          </div>
          <div>
            <EachCharacter char="L" hover={"hover:bg-[#9BD5F5]"} />
          </div>
          <div>
            <EachCharacter char="O" hover={"hover:bg-[#ff6680]"} />
          </div>
          <div>
            <EachCharacter char="R" hover={"hover:bg-[#7cff66]"} />
          </div>
          <div>
            <EachCharacter char="E" hover={"hover:bg-[#ae47b3]"} />
          </div>
          <div>
            <EachCharacter char="M" hover={"hover:bg-[#fff566]"} />
          </div>
          <div>
            <EachCharacter char="" />
          </div>
          <div>
            <EachCharacter char="I" hover={"hover:bg-[#8c61ff]"} />
          </div>
          <div>
            <EachCharacter char="P" hover={"hover:bg-[#f75d59]"} />
          </div>
          <div>
            <EachCharacter char="S" hover={"hover:bg-[#ffb0ad]"} />
          </div>
          <div>
            <EachCharacter char="U" hover={"hover:bg-[#f79a59]"} />
          </div>
          <div>
            <EachCharacter char="M" hover={"hover:bg-[#072448]"} />
          </div>
          <div>
            <EachCharacter char="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LoremSlider;
