import ParaText from '@/components/ParaText'
import Header from './Header'
import Hero from './Hero'
import LoremSlider from './LoremSlider'
import CardSlider from './Slider'

const ConceptCapers = () => {
    return (
        <div className='bg-[#FEF6F0]'>
            <div className=''>
                <div className='max-w-[1600px] mx-auto px-6 lg:px-20'>
                    <Header />
                    <Hero />
                    <LoremSlider />
                </div>
                <ParaText />
            </div>

        </div>
    )
}

export default ConceptCapers

