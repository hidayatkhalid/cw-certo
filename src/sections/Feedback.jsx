import React from 'react'
import { feedbacks, logos } from '../constant/feedback'
import SliderFeedback from '../components/SliderFeedback'
import SliderLogo from '../components/SliderLogo'


const Feedback = () => {
    return (
        <section className='relative py-10  min-h-screen bg-gradient-to-t to-[#F7C95F] from-[#FDB235]'>
            <h2 className='flex justify-center text-center lg:text-start lg:justify-start text-[36px] px-[100px] mt-[30px] lg:mt-[70px] font-extrabold text-[#02033B]'>Loved by thousands of iPhone<br />and Android users alike
            </h2>

            <div className='py-10 px-3'>
                <SliderFeedback feedbacks={feedbacks} />
            </div>

            <div className='px-10 flex items-center flex-col lg:flex-row justify-center gap-10'>
                <h3 className=' text-[24px] font-extrabold text-[#02033B]'>Featured in:</h3>
                <div className='py-5'>
                    <SliderLogo logos={logos} />
                </div>

            </div>
        </section>
    )
}

export default Feedback
