import React from 'react'
import Header from './common/Header'
import Image from 'next/image'
import Description from './common/Description'
import CustomButton from './common/CustomButton'

const Hero = () => {
    return (
        <div className='bg-[url("/assets/images/webp/hero-bg.webp")] overflow-hidden bg-cover bg-center w-full flex flex-col items-center justify-center relative'>
            <Header />
            <Image className="lg:max-w-[166px] md:max-w-32 max-w-28 hero-img-1 absolute top-44 left-0 pointer-events-none w-full" src="/assets/images/webp/hero-cloud-img-1.webp" width={166} height={85} alt="hero-cloud-img-1" />
            <Image className="lg:max-w-[152px] md:max-w-32 max-w-28 hero-img-2 absolute top-36 right-0 pointer-events-none w-full" src="/assets/images/webp/hero-cloud-img-2.webp" width={152} height={65} alt="hero-cloud-img-2" />

            <div id='home' className="max-[1660px]:max-w-[1920px] xl:max-w-[1204px] lg:max-w-[992px] md:max-w-[768px] max-w-[375px] mx-auto px-8 z-20 relative">
                <div className="w-full mx-auto lg:mb-[233px] md:mb-[130px] mb-[62px] flex flex-col items-center justify-center text-center">
                    <Image className="lg:max-w-[899px] lg:mt-[71px] md:mt-12 mt-10 pointer-events-none lg:mb-[26px] md:mb-5 mb-4 md:max-w-2xl max-w-lg h-auto w-full" src="/assets/images/webp/hero-pumpions-banner.webp" width={899} height={225} alt="hero-pumpions-banner" />
                    <Description customClass="lg:!text-xl !text-black lg:mt-[26px] md:mt-[18px] sm:mt-3 lg:mb-[75px] md:mb-[58px] mb-[34px]" title="Own, support & celebrate art." />
                    <CustomButton title="GET STARTED" />
                </div>
            </div>
        </div>
    )
}

export default Hero
