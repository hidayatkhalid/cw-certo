const Button = ({ text, borderColor, bgColor, textColor }) => {
    return (
        <button className={`flex justify-center items-center gap-2 py-3 px-5 rounded-full font-extrabold
        ${bgColor ? `${bgColor} ${borderColor} ${textColor}` : " text-[#02033B] border-solid border-2 border-[#02033B] hover:border-purple-custom hover:text-purple-custom"}
        `}>
            {text}
        </button>
    )
}

export default Button
