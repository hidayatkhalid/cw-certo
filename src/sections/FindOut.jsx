import Button from "../components/Button"

const FindOut = () => {
    return (
        <section className="flex h-[50vh] px-5 bg-gradient-to-b from-[#2925CC] to-[#4B48E5] justify-center">
            <div className="flex flex-col justify-center items-center text-center gap-10">
                <div>
                    <h2 className="font-inter font-extrabold text-[34px] text-white">Is someone spying on your phone?</h2>
                </div>
                <div>
                    <p className="font-inter text-[18px] text-white">Find out with Certo</p>
                </div>
                <div className="flex flex-row gap-10">
                    <Button text='Get Certo for iPhone' bgColor='bg-yellow-custom' borderColor='' textColor='text-black' />
                    <Button text='Get Certo for Android' bgColor='transparent' borderColor='border-2 border-white border-solid'
                        textColor='text-white' />
                </div>
            </div>
        </section>
    )
}

export default FindOut
