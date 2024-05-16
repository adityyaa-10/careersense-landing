

const ForStudents = () => {
    return (
        <div className="bg-[#F8E1CB] border-4 h-full border-t-0 border-[#161B32] py-6 sm:py-16">
            <div className="relative flex items-center justify-center" >
                <img src="forstudents.png" alt="" className="object-cover max-w-[397px] max-h-[382px]" />

                <div className="absolute text-center">
                    <h6 className="text-xs md:text-base lg:text-lg font-semibold py-1 text-black">For Students</h6>
                    <h5 className="text-sm md:text-lg lg:text-xl font-semibold py-1 text-black">For Students</h5>
                    <h4 className="text-base md:text-xl lg:text-2xl font-semibold py-1 text-black">For Students</h4>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold py-1 text-black">For Students</h3>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold py-1 text-black">For Students</h2>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold py-1 text-black">For Students</h1>
                </div>
            </div>
            <div className='pt-24 pb-11 max-w-[550px] mx-auto w-full'>
                <p className='text-center text-[18px] md:text-[28px] leading-[50px] text-[#020617] font-medium tracking-tighter'>
                    Our mission is to guide students choose
                    the right path to achieve their career goals
                </p>
            </div>
        </div>
    )
}

export default ForStudents
