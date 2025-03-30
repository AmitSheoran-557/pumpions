import React from 'react'

const CustomButton = ({ title, customClass }) => {
    return (
        <button className={`md:max-w-[254px] max-w-[188px] hover:scale-110 transition-all ease-linear duration-300 lg:text-base text-xs md:py-4 py-3 w-full uppercase cursor-pointer !leading-[229%] bg-[url(/assets/images/webp/button-bg-img.webp)] bg-no-repeat bg-[length:100%_100%] ${customClass}`}>{title}</button>
    )
}

export default CustomButton
