'use client';
import React from 'react';
import CustomHeading from './common/CustomHeading';
import { OG_PUMPIONS_DATA_LIST } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './common/CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OgPumpions = () => {
    return (
        <div id='team' className='w-full flex justify-center bg-dark-green-2 items-center -mt-1 og-pumpions'>
            <div className="max-[1660px]:max-w-[1920px] xl:max-w-[1204px] lg:max-w-[992px] md:max-w-[768px] max-w-[375px] mx-auto px-8 w-full">
                <CustomHeading customClass="lg:mb-[79px] md:mb-[75px] mb-[30px]" title="OG PUMPIONS" />

                <div className="w-full md:block max-md:hidden">
                    <div className="flex flex-wrap w-full mx-auto lg:justify-between justify-center lg:gap-0 md:gap-x-36 md:gap-y-[45px] lg:mb-[61px] md:mb-[53px] mb-[30px]">
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
                </div>

                <div className="w-full md:hidden max-md:block md:pb-[53px] pb-[29px]">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.2}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        loop={true}
                        className="mySwiper"
                    >
                        {OG_PUMPIONS_DATA_LIST.map((item, index) => (
                            <SwiperSlide key={index} className="flex flex-col max-w-max items-center">
                                <Image className="w-full mb-[15px] max-w-[226px]" src={item.image} width={226} height={208} alt="card-img" />
                                <h4 className='text-white text-center text-xl leading-snug'>{item.name}</h4>
                                <p className='text-white/70 text-center text-sm mb-4'>{item.role}</p>
                                <div className="flex gap-3 justify-center">
                                    <Link href="https://discord.com/" target="_blank">
                                        <Image className="transition-all ease-linear duration-300 hover:scale-110" src="/assets/images/webp/og-pumpions-discord-img.webp" width={35} height={35} alt="discord" />
                                    </Link>
                                    <Link href="https://x.com/" target="_blank">
                                        <Image className="transition-all ease-linear duration-300 hover:scale-110" src="/assets/images/webp/og-pumpions-twitter-img.webp" width={35} height={35} alt="twitter" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <CustomButton customClass="lg:mb-[141px] md:mb-[150px] mb-[105px] !mx-auto flex justify-center" title="WE ARE HIRING" />
            </div>
        </div>
    );
};

export default OgPumpions;
