import React from 'react'

const Description = ({ title, customClass }) => {
  return (
    <p className={`text-sm text-white uppercase !leading-[229%] text-center ${customClass}`}>{title}</p>
  )
}

export default Description
