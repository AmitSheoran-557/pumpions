'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MEMBERSHIP_PERKS_DATA_LIST } from "@/utils/helper";
import CustomHeading from "./common/CustomHeading";
import 'swiper/css';
import 'swiper/css/pagination';

const MembershipPerks = () => {
    return (
        <div className="flex justify-center membership-perks items-center w-full bg-dark-green-2 -mt-1 relative">
            <Image className="absolute xl:-top-[75px] lg:-top-14 md:-top-10 sm:-top-7 -top-4 max- left-0 pointer-events-none w-full" src="/assets/images/webp/zig-zag-img.webp" width={1920} height={1080} alt="membership-perks-bg" />
            <div className="relative pb-[102px] max-lg:pb-[127px] max-md:pb-[50px] w-full">
                <div className="max-lg:max-w-[770px] mx-auto pt-[97px] max-lg:pt-[70px] max-md:pt-[34px] px-5">
                    <p className="text-xl pb-5 text-white uppercase text-center max-md:text-base max-md:pb-3"> Community + Funding + Sunset</p>
                    <CustomHeading customClass="text-white text-center" title="SUNSET CLUB MEMBERSHIP PERKS" />
                </div>
                <div className="xl:pt-[144px] lg:pt-20 md:pt-6 pt-1 flex w-full items-center gap-7 max-xl:gap-6 max-w-[1440px] mx-auto max-xl:flex-wrap max-xl:justify-center xl:px-0 lg:px-8">
                    <div className="flex flex-wrap w-full items-center">
                        <div className="lg:w-8/12 w-full max-md:px-4">
                            <Image className="xl:max-w-[870px] lg:max-w-[670px] lg:pe-7 xl:pe-0 pointer-events-none max-sm:px-1 w-full" src="/assets/images/webp/clubhouse-img.webp" width={870} height={446} alt="club-house-img" />
                        </div>
                        <div className="lg:w-4/12 w-full">
                            <div className="w-full lg:block max-lg:hidden">
                                <div className="flex w-full flex-wrap xl:gap-2 gap-1.5">
                                    {MEMBERSHIP_PERKS_DATA_LIST.map((obj, i) => (
                                        <div key={i} className="w-full xl:max-w-[181px] lg:max-w-[150px] xl:px-4 px-3 max-w-[278px] hover:bg-[#E8770E] bg-white rounded-lg flex flex-col items-center justify-center xl:py-[26px] py-5 bg-[url(/assets/images/webp/membership-cards-border.webp)] duration-300 ease-linear bg-[length:100%_100%] bg-no-repeat" >
                                            <Image width={48} height={49} className="max-w-12 lg:mb-4 mb-3" src={obj.image} alt={obj.title} />
                                            <p className="text-center lg:text-xs md:text-base">
                                                {obj.title}
                                            </p>
                                            <p className="opacity-70 lg:text-[6px] text-center pt-1 max-xl:text-[10px]">
                                                {obj.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:hidden max-lg:block">
                                <div className="flex w-full">
                                    <Swiper
                                        spaceBetween={16}
                                        slidesPerView={1.2}
                                        pagination={{ clickable: true }}
                                        modules={[Pagination]}
                                        loop={true}
                                        className="mySwiper"
                                    >

                                        {MEMBERSHIP_PERKS_DATA_LIST.map((obj, index) => (
                                            <SwiperSlide key={index} className="flex flex-col items-center">
                                                <div className="w-full xl:max-w-[181px] lg:h-[200px] h-[307px] lg:max-w-[150px] xl:px-4 lg:px-3 md:px-8 px-9 max-w-[278px] hover:bg-[#E8770E] bg-white rounded-lg flex flex-col items-center justify-center xl:py-[26px] py-5 bg-[url(/assets/images/webp/membership-cards-border.webp)] duration-300 ease-linear bg-[length:100%_100%] bg-no-repeat" >
                                                    <Image width={48} height={49} className="max-w-12 lg:mb-4 mb-3" src={obj.image} alt={obj.title} />
                                                    <p className="text-center uppercase !leading-[204%] lg:text-xs md:text-base">
                                                        {obj.title}
                                                    </p>
                                                    <p className="opacity-70 uppercase lg:text-[6px] !leading-[204%] text-center pt-1 max-xl:text-[10px]">
                                                        {obj.description}
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MembershipPerks;
