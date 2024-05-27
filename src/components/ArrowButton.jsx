import arrow from '../assets/arrow.svg';
const ArrowButton = ({ text, textColor, hoverColor }) => {
    return (
        <button className={`flex justify-start items-center gap-2 font-extrabold text-
        ${textColor ? `${textColor} hover:text-${hoverColor}` : ""}`}>
            <img src={arrow} alt="arrow logo" className='stroke-yellow-custom' width={40} />
            <p className='text-xl'>{text}</p>
        </button>
    )
}

export default ArrowButton
