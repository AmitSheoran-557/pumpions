import Image from 'next/image'
import React from 'react'
import CustomHeading from './common/CustomHeading'

const MembershipPerks = () => {
    return (
        <div className='bg-dark-green-2 -mt-1 bg-cover flex flex-col justify-center items-center relative pt-28'>
            <Image className="max-[1660px]:max-w-[1920px] lg:max-w-[1440px] max-sm:min-w-[545px] absolute -top-[70px] mx-auto max-h-[786px] h-auto w-full" src="/assets/images/webp/zig-zag-img.webp" width={1440} height={786} alt="zig-zag-vector" />
            <h4 className='uppercase text-center md:text-xl md:mb-5 mb-3 text-white'>Community + Funding + Sunset</h4>
            <CustomHeading customClass="xl:mb-[144px] lg:mb-[125px] md:mb-6 mb-2" title="SUNSET CLUB MEMBERSHIP PERKS" />
            <div className="flex flex-wrap w-full mx-auto justify-center items-center">
                <div className="lg:w-8/12 w-full">
                    <Image className="h-full w-full lg:max-w-[870px] md:max-w-[770px]" src="/assets/images/webp/clubhouse-img.webp" width={870} height={446} alt="zig-zag-vector" />

                </div>
                <div className="lg:w-4/12 w-full">

                </div>
            </div>
        </div>
    )
}

export default MembershipPerks
