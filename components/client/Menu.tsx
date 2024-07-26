import { convertPrice } from '@/utils/Product';
import Image from 'next/image'
import React from 'react'
const menu = '/images/menu-bg.png';
const bean1 = '/images/coffee-beans-5.png';
const bean2 = '/images/coffee-beans-4.png';

const Menu = () => {
    return (
        <div className='container select-none md:mt-16 lg:mt-20 xl:mt-28 w-full flex flex-col items-center justify-center gap-8 px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid shadow-title'>منو اصلی</h2>

            <div className='relative w-full flex flex-row items-center justify-around gap-x-16'>
                <div className='w-full flex flex-col items-center justify-center gap-y-12 sm:gap-y-16 text-brown-500'>
                    <div className='w-full sm:w-3/4 flex flex-col items-center justify-center gap-y-4 -me-24'>
                        <div dir='rtl' className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 text-center items-center justify-between fontMorvarid'>
                            <h4 className='text-xl sm:text-2xl font-bold'>
                                چاکلت
                            </h4>
                            <h6 className='text-base sm:text-lg'>
                                {convertPrice(50000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-px sm:h-0.5 md:h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-full sm:w-3/4 flex flex-col items-center justify-center gap-y-4'>
                        <div dir='rtl' className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 text-center items-center justify-between fontMorvarid'>
                            <h4 className='text-xl sm:text-2xl font-bold'>
                                اسپرسو
                            </h4>
                            <h6 className='text-base sm:text-lg'>
                                {convertPrice(85000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-px sm:h-0.5 md:h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-full sm:w-3/4 flex flex-col items-center justify-center gap-y-4 -me-24'>
                        <div dir='rtl' className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 text-center items-center justify-between fontMorvarid'>
                            <h4 className='text-xl sm:text-2xl font-bold'>
                                لاته
                            </h4>
                            <h6 className='text-base sm:text-lg'>
                                {convertPrice(30000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-px sm:h-0.5 md:h-1 bg-brown-800 rounded-full' />
                    </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <Image
                        className='h-auto w-full z-20 bg-gradient-radial from-[1%] to-[60%] from-brown-700/40 to-[#221518]'
                        src={menu}
                        alt="menu"
                        width={500}
                        height={500}
                        quality={100}
                        loading='lazy'
                    />
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-y-12 sm:gap-y-16 text-brown-500'>
                    <div className='w-full sm:w-3/4 flex flex-col items-center justify-center gap-y-4 -ms-24'>
                        <div dir='rtl' className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 text-center items-center justify-between fontMorvarid'>
                            <h4 className='text-xl sm:text-2xl font-bold'>
                                چاکلت
                            </h4>
                            <h6 className='text-base sm:text-lg'>
                                {convertPrice(50000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-px sm:h-0.5 md:h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-full sm:w-3/4 flex flex-col items-center justify-center gap-y-4'>
                        <div dir='rtl' className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 text-center items-center justify-between fontMorvarid'>
                            <h4 className='text-xl sm:text-2xl font-bold'>
                                اسپرسو
                            </h4>
                            <h6 className='text-base sm:text-lg'>
                                {convertPrice(85000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-px sm:h-0.5 md:h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-full sm:w-3/4 flex flex-col items-center justify-center gap-y-4 -ms-24'>
                        <div dir='rtl' className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 text-center items-center justify-between fontMorvarid'>
                            <h4 className='text-xl sm:text-2xl font-bold'>
                                لاته
                            </h4>
                            <h6 className='text-base sm:text-lg'>
                                {convertPrice(30000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-px sm:h-0.5 md:h-1 bg-brown-800 rounded-full' />
                    </div>
                </div>

                <>
                    <Image
                        className='size-12 sm:size-16 md:size-20 lg:size-24 xl:size-28 absolute -left-2 sm:left-2 md:left-4 lg:left-6 xl:left-8 top-8'
                        width={100}
                        height={100}
                        src={bean1}
                        alt="coffee-bean-1"
                        quality={100}
                        loading='lazy'
                    />
                    <Image
                        className='size-12 sm:size-16 md:size-20 lg:size-24 xl:size-28 absolute left-0 sm:left-8 md:left-12 lg:left-16 xl:left-20 top-28'
                        width={100}
                        height={100}
                        src={bean1}
                        alt="coffee-bean-1"
                        quality={100}
                        loading='lazy'
                    />
                    <Image
                        className='size-12 sm:size-16 md:size-20 lg:size-24 xl:size-28 absolute right-0 sm:right-8 md:right-12 lg:right-16 xl:right-20 bottom-28'
                        width={100}
                        height={100}
                        src={bean2}
                        alt="coffee-bean-2"
                        quality={100}
                        loading='lazy'
                    />
                    <Image
                        className='size-12 sm:size-16 md:size-20 lg:size-24 xl:size-28 absolute -right-2 sm:right-2 md:right-4 lg:right-6 xl:right-8 bottom-8'
                        width={100}
                        height={100}
                        src={bean2}
                        alt="coffee-bean-2"
                        quality={100}
                        loading='lazy'
                    />
                </>
            </div>
        </div>
    )
}

export default Menu