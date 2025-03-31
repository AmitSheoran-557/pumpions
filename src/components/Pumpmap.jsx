import Image from 'next/image'
import React from 'react'
import CustomHeading from './common/CustomHeading'
import Description from './common/Description'

const Pumpmap = () => {
    return (
        <div className='flex justify-center bg-dark-green-2 items-center -mt-1 w-full lg:pb-[183px] md:pb-[130px] pb-[66px]'>
            <div className="max-[1660px]:max-w-[1920px] xl:max-w-[1204px] lg:max-w-[992px] md:max-w-[768px] max-w-[375px] mx-auto md:px-8 px-4 w-full">
                <div className="flex flex-wrap max-lg:flex-col-reverse w-full justify-center items-center">
                    <div className="lg:w-5/12 w-full">
                        <Image className="xl:max-w-[407px] lg:max-w-[350px] lg:mt-0 md:mt-[55px] mt-[50px] pointer-events-none max-sm:px-1 max-w-[407px] max-lg:mx-auto w-full" src="/assets/images/webp/pumpmap-img.webp" width={407} height={374} alt="pumpmap" />
                    </div>
                    <div className="lg:w-7/12 w-full">
                        <CustomHeading customClass="md:mb-4 mb-6 lg:!text-start" title="PUMPMAP" />
                        <Description customClass="lg:text-start md:mb-4 max-sm:mb-[30px]" title="We want to avoid overpromising from the get go. For that, we are approaching roadmaps slightly differently. Pumpions will continue to evolve overtime as a brand and move closer to its biggest goal. To empower individuals with art." />
                        <Description customClass="lg:text-start" title="By owning a Pumpion you will have access to a vibrant, positive, and rewarding community, meet like-minded and kind human beings, and most importantly, you will be supporting and celebrating the next generation of artists and animations studios." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pumpmap
