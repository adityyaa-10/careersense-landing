"use client";

function CardSlider() {
  return (
    <div
      className="mx-auto overflow-x-hidden py-5"
      style={{ position: "relative", width: "100vw" }}
    >
      <div
        className="flex items-center justify-center"
        style={{ position: "relative" }}
      >
        <img
          className="absolute h-32 md:h-full"
          style={{ left: 0, transform: "translateX(-50%)" }}
          src="/Card1.png"
          alt="Card 1"
        />
        <img className="h-32 md:h-full" src="/Card2.png" alt="Card 2" />
        <img
          className="absolute h-32 md:h-full"
          style={{ right: 0, transform: "translateX(50%)" }}
          src="/Card3.png"
          alt="Card 3"
        />
      </div>
    </div>
  );
}

export default CardSlider;
