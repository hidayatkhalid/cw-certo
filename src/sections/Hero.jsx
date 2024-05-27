import Button from '../components/Button'
import Android from '../assets/android-dashboard-certo-2.png'
import Ellipse from '../assets/Ellipse 2.png'
import triangle from '../assets/triangle.svg'

const Hero = () => {
    return (
        <section className='flex w-screen min-h-screen justify-center items-center bg-[#F3F8FF] px-5 lg:px-[150px] pt-[100px] lg:pt-[50px] flex-col lg:flex-row'>
            <figure className='absolute left-0 top-[100px] resize-none'>
                <img src={Ellipse} alt='Ellipse' width={970} className='' />
            </figure>

            <div className='flex flex-row z-10 flex-1 justify-center lg:justify-start text-center lg:text-start lg:basis-4/5'>

                <div className="w-3/5 py-10">
                    <h1 className='font-inter text-[60px] mb-10 tracking-tighter font-bold'>Your mobile privacy<br />is our mission</h1>

                    <div className='py-4'>
                        <p className='font-inter text-lg font-medium'>Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.</p>
                    </div>

                    <div className='flex text-[20px] pt-10 space-x-10 font-medium'>
                        <Button text='Get Certo for iPhone' bgColor='bg-yellow-custom' borderColor='border-none' textColor='text-black' />
                        <Button text='Get Certo for Android' />
                    </div>
                </div>



            </div>
            <figure className='resize-none z-20 hidden lg:flex lg:basis-1/5'>
                <img src={Android} alt='android image' width={300} />
            </figure>

            {/* <div className='basis-1/4 lg:1/2 justify-center items-center hidden lg:block'>

                <div className='absolute bg-[#4335de] w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] rounded-full'></div>
                <div className='w-[380px] h-[380px] xl:w-[580px] xl:h-[580px] bg-[url(https://certo-software.imgix.net/app/uploads/2022/08/home-header-2.png?w=1000&h=&auto=format)] rounded-full z-10 bg-cover translate-x-[-20px] '>

                </div>
            </div> */}

        </section >
    )
}

export default Hero
