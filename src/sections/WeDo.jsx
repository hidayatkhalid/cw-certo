
import Button from '../components/Button'

const WeDo = () => {
    return (
        <section className='flex flex-col md:flex-row min-h-[80vh] px-[132px] py-[84px]'>
            <div className='basis-1/2 my-10 px-[50px] text-center md:text-start'>
                <h1 className=' text-[36px] font-bold font-inter text-[#02033B] tracking-tight '>At Certo, mobile security is not an afterthought, it's what we do.</h1>

                <p className='font-inter text-medium my-10 text-lg'>With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>

                <div className='my-5 flex flex-col items-center md:items-start gap-5'>
                    <Button text='Get Certo for iPhone' borderColor='' bgColor='bg-yellow-custom' textColor='text-[#02033B]' />
                    <Button text='Get Certo for Android' />
                </div>
            </div>

            <div className='basis-1/2 flex justify-center items-center'>
                <div className='absolute bg-yellow-custom w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full'></div>
                <img src='https://certo-software.imgix.net/app/uploads/2022/08/AdobeStock_350132639-scaled-2.jpeg?w=1000&h=&auto=format' alt='girl playing phone' className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full z-10 object-cover translate-x-[-20px]' />
            </div>
        </section>
    )
}

export default WeDo
