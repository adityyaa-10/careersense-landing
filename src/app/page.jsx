import Marquee from '@/components/Marquee/Marquee'
import Navigation from '@/components/Header/Navigation'
import Hero from '@/components/Hero/Hero'
import LoremSlider from '@/components/Hero/LoremSllider'
import Pricing from '@/components/Pricing/Pricing'
import ForStudents from '@/components/ForStudents/ForStudents'
import EducatePath from '@/components/EducatePath/EducatePath'
import Footer from '@/components/Footer/Footer.'

const Home = () => {
  return (
    <div className='bg-[#FEF6F0] overflow-hidden '>

      <div className='px-4 md:px-7 lg:px-20'>
        <Navigation />
        <Hero />
        <LoremSlider />
      </div>
      <Marquee />
      <div className='w-full pb-24'>
        <Pricing />
        <ForStudents />
        <EducatePath />
        <div className='mt-24'>
          <Footer />
        </div>
      </div>



    </div>
  )
}

export default Home

