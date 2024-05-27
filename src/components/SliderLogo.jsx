import './SliderLogo.css'

const SliderLogo = ({ logos }) => {
    return (
        <div>
            <div className=''>
                <div className='grid grid-cols-2 gap-10 md:gap-4 md:grid-cols-6 items-center'>
                    {logos.map((logo) => (

                        <img src={logo.imgURL} alt={logo.name} width={130} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SliderLogo
