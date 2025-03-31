"use client"
import { HEADER_LIST, HEADER_SOCIAL_ICONS_LIST, HEADER_SOCIAL_ICONS_LIST_TWO } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className={`flex justify-between flex-col w-full z-[99] lg:pt-[30px] pt-5`}>
            <div className="max-w-[1204px] md:px-8 px-4 w-full mx-auto relative">
                <div className="bg-[url(/assets/images/webp/header-bg-img.webp)] lg:px-16 md:px-14 px-[26px] flex w-full bg-no-repeat bg-[length:100%_100%] md:h-[76px] md:py-[14px] py-[7px] items-center">
                    <button onClick={() => setOpen(!open)} className={`hidden md:max-w-[42px] md:h-12 mt-1.5 h-full max-w-[30px] w-full justify-center items-end max-lg:absolute max-lg:right-[90px] md:mt-1 max-md:right-10 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
                        <span className={`w-full transition-all duration-300 md:min-h-1 md:min-w-[42px] h-[3px] md:mb-[7px] mb-[5px] bg-black relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 md:!-mb-1 after:rotate-90 after:bg-white !bg-white" : ""}`}></span>
                        <span className={`w-full transition-all duration-300 md:min-h-1 md:min-w-[42px] h-[3px] md:mb-[7px] mb-[5px] bg-black ${open ? "hidden" : ""}`}></span>
                        <span className={`!max-w-5 md:min-w-5 min-w-4 transition-all duration-300 md:min-h-1 h-[3px] md:mb-[7px] mb-[5px] bg-black after:!bg-black ${open ? "-translate-x-12 !bg-white" : ""}`}></span>
                    </button>
                    <Link href="/">
                        <Image className="lg:!max-w-[41px] md:max-w-9 max-w-7 lg:!min-w-[41px] md:min-w-9 min-w-7 h-auto w-full" src="/assets/images/webp/header-logo.webp" width={41} height={47} alt="logo" />
                    </Link>
                    <div className={`flex xl:gap-5 lg:pl-[18px] pl-4 items-center max-lg:px-4 relative w-full max-lg:bg-orange-400 mx-auto gap-7 text-black max-lg:text-white lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern bg-cover bg-top max-lg:duration-300 justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                        {HEADER_LIST.map((item, index) => (
                            <Link onClick={() => setOpen(!open)} key={index} href={item.link} className="relative lg:text-base text-sm transition-all duration-300 !leading-[130%] uppercase ease-linear group">{item.title}
                                <span className="absolute left-0 -bottom-1 w-0 h-[5px] bg-yellow transition-all duration-300 ease-linear group-hover:w-full"></span>
                            </Link>
                        ))}
                        <div className="md:hidden max-md:block">
                            <div className="flex items-center gap-3">
                                {HEADER_SOCIAL_ICONS_LIST.map((item, index) => (
                                    <Link onClick={() => setOpen(!open)} key={index} href={item.link} target="_blank">
                                        <Image className="lg:min-w-[35px] md:min-w-[30px] bg-white rounded-full min-w-7 lg:max-w-[35px] md:max-w-[30px] max-w-full object-cover" src={item.icon} width={35} height={35} alt="social-icon" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="max-md:hidden w-full justify-end md:mr-20 lg:mr-0 block">
                        <div className="flex w-full justify-end items-center lg:gap-[11px] gap-2">
                            {HEADER_SOCIAL_ICONS_LIST.map((item, index) => (
                                <Link key={index} href={item.link} target="_blank" className="hover:scale-110 transition-all ease-linear duration-300" >
                                    <Image className="lg:min-w-[35px] md:min-w-[30px] min-w-7 lg:max-w-[35px] md:max-w-[30px] max-w-full object-cover" src={item.icon} width={35} height={35} alt="social-icon" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
