import Button from "../components/Button"

const Help = () => {
    return (
        <section className="flex px-5 py-10 h-[80vh] md:h-[50vh] bg-white justify-center">
            <div className="flex gap-2 flex-col md:flex-row place-items-center justify-center ">

                <div className="bg-gradient-to-b from-[#F7C95F] to-[#FDB235] rounded-[50px] py-[40px] px-[50px] basis-1/2 space-y-10">
                    <h2 className="font-inter font-extrabold text-[23px]">Read our story</h2>
                    <div>
                        <p className="text-[16px] font-inter">Find out why thousands trust Certo to secure their mobile world.</p>
                    </div>
                    <div>
                        <Button text='About us' textColor='text-white' bgColor='bg-[#4335DE]' borderColor='' />
                    </div>
                </div>

                <div className="basis-1/2 py-[40px] px-[50px] space-y-10">
                    <h2 className="font-inter font-extrabold text-[23px]">Help Center</h2>
                    <div>
                        <p className="text-[16px] font-inter">Help topics, getting started guides and FAQs.</p>
                    </div>
                    <div className="flex">
                        <Button text='Visit help center' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help
