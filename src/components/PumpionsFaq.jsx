"use client";
import { FAQ_DATA_LIST } from '@/utils/helper';
import React, { useState } from 'react';
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';

const plusIcon = '/assets/images/webp/accordion-plus-img.webp';
const minusIcon = '/assets/images/webp/accordion-minus-img.webp';

const PumpionsFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="w-full flex justify-center bg-dark-green-2 items-center xl:pb-[170px] md:pb-20 pb-7 px-4 -mt-1 relative">
            <Image src="/assets/images/webp/faq-bg-img.webp" width={1920} height={1080} alt="faq-bg" className="absolute pointer-events-none xl:-top-48 lg:-top-40 md:-top-32 -top-7 left-0 z-10 w-full h-full" />
            <div className="max-w-[745px] mx-auto w-full relative z-20">
                <CustomHeading customClass="lg:mb-[46px] md:mb-[50px] mb-[15px]" title="Faq" />
                <div className="md:space-y-6 sm:space-y-4 space-y-2.5">
                    {FAQ_DATA_LIST.map((item, index) => (
                        <div key={index}>
                            <button onClick={() => handleToggle(index)}
                                className="w-full flex justify-between items-center md:ps-10 md:pe-[31px] max-md:px-[15px] md:py-4 py-1.5 bg-[url(/assets/images/webp/accordion-border-img.webp)] bg-[length:100%_100%] hover:bg-white sm:min-h-[71px] min-h-[33px] ease-linear transition-all duration-300 rounded-md shadow-sm" >
                                <h3 className="md:text-base sm:text-xs text-[9px] !leading-[202%] uppercase text-start">
                                    {item.question}
                                </h3>
                                <img src={activeIndex === index ? minusIcon : plusIcon} alt={activeIndex === index ? 'Minus Icon' : 'Plus Icon'}
                                    className={`md:w-10 sm:w-8 w-[19px] md:h-10 sm:h-8 h-[19px] transition-transform duration-300 ease-in-out ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="px-4 py-2 md:text-base sm:text-xs text-[9px] text-white">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PumpionsFaq;
