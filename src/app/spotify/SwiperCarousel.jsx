"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SwiperCarousel = () => {
    const slides = [
        { id: 1, image: 'https://via.placeholder.com/600x400', title: 'Slide 1' },
        { id: 2, image: 'https://via.placeholder.com/600x400', title: 'Slide 2' },
        { id: 3, image: 'https://via.placeholder.com/600x400', title: 'Slide 3' },
        { id: 4, image: 'https://via.placeholder.com/600x400', title: 'Slide 4' },
        { id: 5, image: 'https://via.placeholder.com/600x400', title: 'Slide 5' },
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1.5}
                loop={true}
                className="mySwiper"
                modules={[Navigation]}
                navigation={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        className="swiper-slide-custom transform transition-transform duration-300 scale-90 "
                    >
                        <div className="p-2 sm:p-4">
                            <img src={slide.image} alt={slide.title} className="rounded-lg w-full" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default SwiperCarousel;
