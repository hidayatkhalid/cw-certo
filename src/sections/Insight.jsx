import { insights } from "../constant/feedback"
import Button from "../components/Button"

const Insight = () => {
    return (
        <section className="flex bg-[#F3F8FF] justify-center items-center py-[84px] px-5 lg:px-[182px]">
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="font-inter font-extrabold text-[56px] tracking-tight mb-[50px]">Latest insights</h2>
                </div>

                <div className="flex justify-center flex-col md:flex-row gap-10 ">
                    {insights.map((insight) => (
                        <div className="flex flex-1 flex-col bg-white rounded-[50px]">

                            <div className="relative">
                                <div className="h-[180px] bg-cover rounded-t-[50px]"
                                    style={{ backgroundImage: `url('${insight.imgURL}')` }}>

                                </div>
                                <div className="absolute top-5 left-5">
                                    <Button text={insight.buttonLabel} textColor='text-black' borderColor='' bgColor='bg-white' />
                                </div>

                            </div>

                            <div className="p-[48px] space-y-10">
                                <h2 className="font-inter font-bold text-[23px] text-[#02033B] tracking-tight">{insight.title}</h2>
                                <p className="font-inter text-[16px] text-[#02033B] ">{insight.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex py-10">
                    <Button text='View all insights' textColor='text-[#02033B]' bgColor='bg-yellow-custom' borderColor='' />
                </div>
            </div>
        </section>
    )
}

export default Insight
