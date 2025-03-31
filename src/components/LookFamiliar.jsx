import React from 'react'
import CustomHeading from './common/CustomHeading'
import Image from 'next/image'
import { LOOK_FAMILIAR_BOTTOM_LIST, LOOK_FAMILIAR_TOP_LIST } from '@/utils/helper'
import Marquee from 'react-fast-marquee'

const LookFamiliar = () => {
    return (
        <div className='bg-dark-green bg-[url(/assets/images/webp/look-familiar-bg-img.webp)] -mt-1 bg-cover bg-no-repeat relative overflow-hidden lg:pb-[92px] md:pb-[117px] pb-[68px]'>
            <div className="relative z-20">
                <h3 className='uppercase text-center md:text-xl md:mb-5 mb-3 text-white'> PEAK AT THE SUNSET</h3>
                <CustomHeading customClass="lg:mb-[102px] md:mb-[85px] mb-[50px]" title="THEY SURE LOOK FAMILIAR" />
                <div className="max-w-[1920px] mx-auto flex flex-col gap-[28.8px] lg:mb-[92px] md:mb-[117px] mb-[26px]">
                    <Marquee>
                        {LOOK_FAMILIAR_TOP_LIST.map((obj, i) => (
                            <Image
                                key={i}
                                width={175.14}
                                height={193.2}
                                className="ml-[26px] pointer-events-none max-md:max-w-[107.13px] max-md:w-full max-md:ml-4"
                                src={obj}
                                alt="img"
                            />
                        ))}
                    </Marquee>
                    <Marquee direction="right">
                        {LOOK_FAMILIAR_BOTTOM_LIST.map((obj, i) => (
                            <Image
                                key={i}
                                width={175.14}
                                height={193.2}
                                className="ml-[26px]  pointer-events-none max-md:max-w-[107.13px] max-md:w-full max-md:ml-4"
                                src={obj}
                                alt="img"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default LookFamiliar
