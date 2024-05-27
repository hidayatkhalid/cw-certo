import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const SliderFeedback = ({ feedbacks }) => {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className='sliderFeedback items-center justify-center h-[350px]'
            >
                {feedbacks.map((feedback) => (
                    <SwiperSlide key={feedback.star} className='min-w-screen bg-white p-5 lg:p-10 rounded-[50px] lg:rounded-[60px] shadow-black translate-x-[-150px]'>
                        <div className='mb-5'>
                            {[...Array(feedback.star)].map((_, i) => (
                                <i className='fa-solid fa-star fa-xl' style={{ color: "#FFC247" }}></i>
                            ))}
                        </div>
                        <p className='font-inter text-sm font-normal text-[#02033B]'>{feedback.comment}</p>
                        <h5 className='py-3 font-inter font-extrabold text-[16px] text-[#02033B]'>{feedback.name}, {feedback.platform}</h5>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderFeedback
