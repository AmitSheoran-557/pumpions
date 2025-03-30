import React from 'react'

const CustomHeading = ({ title, customClass }) => {
  return (
    <h2 className={`md:text-4xl text-2xl uppercase text-white !leading-[204%] text-center ${customClass}`}>{title}</h2>
  )
}

export default CustomHeading
