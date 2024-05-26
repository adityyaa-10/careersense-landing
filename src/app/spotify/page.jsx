import SwiperCarousel from "./SwiperCarousel";

const SpotifySlider = () => {
    return (
        <div className="bg-[#2d46b9] h-screen">

            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-white text-3xl sm:text-5xl  font-medium text-center py-11 sm:pt-24 lg:pt-48 sm:pb-16">Featured Jobs</h1>
                    <SwiperCarousel />
                </div>
            </div>
        </div>
    );
};

export default SpotifySlider;
