import { FOOTER_SOCIAL_ICONS_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[url('/assets/images/webp/footer-bg.webp')] -mt-[1px] lg:pt-[90px] md:pt-[66px] pt-[30px] lg:pb-[55px] md:pb-[66px] pb-[30px] bg-cover bg-center w-full flex flex-col items-center justify-center relative">
            <div className="max-[1660px]:max-w-[1920px] xl:max-w-[1204px] relative z-30 lg:max-w-[992px] md:max-w-[768px] max-w-[375px] mx-auto px-8 w-full">
                <div className="flex items-center flex-col">
                    <Image className="md:max-w-[322px] max-w-[193px] w-full" src="/assets/images/webp/hero-pumpions-banner.webp" width={322} height={225} alt="footer-pumpions-banner" />
                    <p className='text-xs text-white/70 max-w-[425px] w-full text-center !leading-[202%] lg:mb-6 md:mb-[22px] mb-[9px]'>Suspendisse vestibulum a tellus sit amet mattis</p>
                    <div className="flex lg:gap-3 gap-1.5 items-center justify-center w-full">

                        {FOOTER_SOCIAL_ICONS_LIST.map((item, index) => (
                            <Link key={index} href={item.link} target="_blank">
                                <Image className="lg:min-w-[35px] md:min-w-[30px] min-w-7 lg:max-w-[35px] md:max-w-[30px] max-w-full object-cover hover:scale-110 duration-300 transition-all ease-linear" src={item.icon} width={35} height={35} alt="social-icon" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
