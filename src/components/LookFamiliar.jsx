import React from 'react'
import CustomHeading from './common/CustomHeading'
import Image from 'next/image'

const LookFamiliar = () => {
    return (
        <div className='bg-dark-green bg-[url(/assets/images/webp/look-familiar-bg-img.webp)] -mt-1 bg-cover bg-no-repeat relative overflow-hidden lg:pb-[92px] md:pb-[117px] pb-[68px]'>
            <div className="relative z-20">
                <h3 className='uppercase text-center md:text-xl md:mb-5 mb-3 text-white'> PEAK AT THE SUNSET</h3>
                <CustomHeading customClass="lg:mb-[102px] md:mb-[85px] mb-[50px]" title="THEY SURE LOOK FAMILIAR" />
                <Image className="max-[1660px]:max-w-[1920px] lg:max-w-[1440px] max-sm:min-w-[545px] mx-auto max-h-[786px] h-auto w-full" src="/assets/images/png/slider-img.png" width={1440} height={786} alt="zig-zag-vector" />
            </div>
        </div>
    )
}

export default LookFamiliar
