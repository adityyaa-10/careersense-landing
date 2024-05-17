import ParaText from '@/components/ParaText'
import Header from './Header'
import Hero from './Hero'
import LoremSlider from './LoremSlider'
import Pricing from './Pricing'
import Footer from './Footer'
import ForStudents from './ForStudents'
import EducatePath from './EducatePath'

const ConceptCapers = () => {
    return (
        <div className='bg-[#FEF6F0] overflow-hidden '>

            <div className='px-4 md:px-7 lg:px-20'>
                <Header />
                <Hero />
                <LoremSlider />
            </div>
            <ParaText />
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

export default ConceptCapers

