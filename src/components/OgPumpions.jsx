import React from 'react'
import CustomHeading from './common/CustomHeading'
import { OG_PUMPIONS_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './common/CustomButton'

const OgPumpions = () => {
    return (
        <div className='w-full flex justify-center bg-dark-green-2 items-center -mt-1'>
            <div className="max-[1660px]:max-w-[1920px] xl:max-w-[1204px] lg:max-w-[992px] md:max-w-[768px] max-w-[375px] mx-auto px-8 w-full">
                <CustomHeading customClass="lg:mb-[79px] md:mb-[75px] mb-[30px]" title="OG PUMPIONS" />
                <div className="flex flex-wrap w-full mx-auto justify-between lg:mb-[61px] md:mb-[53px] mb-[30px]">
                    {OG_PUMPIONS_DATA_LIST.map((item, index) => (
                        <div className="max-w-[226px] w-full" key={index}>
                            <Image className="lg:max-w-[226px] w-full mb-[31px]" src={item.image} width={226} height={208} alt="card-img" />
                            <h4 className='md:text-2xl text-white !leading-[202%] text-center'>{item.name}</h4>
                            <p className='text-base text-white/70 text-center mb-4'>{item.role}</p>
                            <div className="flex gap-3 justify-center">
                                <Link href="https://discord.com/" target="_blank">
                                    <Image className="transition-all ease-linear duration-300 hover:scale-110" src="/assets/images/webp/og-pumpions-discord-img.webp" width={35} height={35} alt="social-icon" />
                                </Link>
                                <Link href="https://x.com/" target="_blank">
                                    <Image className="transition-all ease-linear duration-300 hover:scale-110" src="/assets/images/webp/og-pumpions-twitter-img.webp" width={35} height={35} alt="social-icon" />
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
                <CustomButton customClass="lg:mb-[141px] md:mb-[150px] mb-[105px] !mx-auto flex justify-center" title="WE ARE HIRING" />
            </div>
        </div>
    )
}

export default OgPumpions
