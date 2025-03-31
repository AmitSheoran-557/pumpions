import React from 'react'
import CustomHeading from './common/CustomHeading'
import Description from './common/Description'
import Image from 'next/image'

const MeetThePumpions = () => {
    return (
        <div id='about' className='xl:pb-[254px] lg:pb-[254px] md:pb-[100px] pb-[125px] bg-dark-green flex justify-center bg-cover w-full relative'>
            <Image className="max-[1660px]:max-w-[unset] absolute xl:-bottom-[80%] pointer-events-none lg:-bottom-[50%] md:-bottom-[60%] sm:-bottom-[40%] -bottom-[20%] z-20 max-xl:max-w-[1440px] mx-auto max-h-[786px] h-auto w-full" src="/assets/images/webp/zig-zag-common.webp" width={1440} height={786} alt="zig-zag-vector" />
            <div className='w-full -mt-1 lg:pt-[150px] md:pt-[100px] z-20 relative pt-5 overflow-hidden'>
                <div className="max-[1660px]:max-w-[1920px] xl:max-w-[1204px] lg:max-w-[992px] md:max-w-[768px] max-w-[375px] mx-auto md:px-8 px-4">
                    <div className="lg:px-[42px] lg:py-14 max-lg:pt-9 max-lg:pb-7 max-lg:px-5 lg:bg-[url('/assets/images/webp/meet-pumpions-orange-bg.webp')] md:bg-[url(/assets/images/webp/look-familiar-md-bg-img.webp)] bg-[url(/assets/images/webp/look-familiar-sm-bg-img.webp)] bg-no-repeat bg-[length:100%_100%]">
                        <CustomHeading customClass="lg:mb-2.5 sm:mb-2 mb-2.5 max-lg:!text-2xl" title="MEET THE PUMPIONS" />
                        <Description customClass="max-w-[1046px] w-full mx-auto" title="They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and  contributes to supporting artists & animations studios all over the world." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetThePumpions
