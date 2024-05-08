import { convertPrice } from '@/utils/Product';
import Image from 'next/image'
import React from 'react'
const menu = '/images/menu-bg.png';
const bean1 = '/images/coffee-beans-5.png';
const bean2 = '/images/coffee-beans-4.png';

const Menu = () => {
    return (
        <div className='select-none mt-28 w-full flex flex-col items-center justify-center gap-8 px-16'>
            <h2 className='text-5xl fontMorvarid shadow-title'>منو اصلی</h2>

            <div className='relative w-full flex flex-row items-center justify-around gap-x-16'>
                <div className='w-full flex flex-col items-center justify-center gap-y-16 text-brown-500'>
                    <div className='w-3/4 flex flex-col items-center justify-center gap-y-4 -me-24'>
                        <div dir='rtl' className='w-full flex flex-row items-center justify-between fontMorvarid'>
                            <h4 className='text-2xl font-bold'>
                                چاکلت
                            </h4>
                            <h6 className='text-lg'>
                                {convertPrice(50000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-3/4 flex flex-col items-center justify-center gap-y-4'>
                        <div dir='rtl' className='w-full flex flex-row items-center justify-between fontMorvarid'>
                            <h4 className='text-2xl font-bold'>
                                اسپرسو
                            </h4>
                            <h6 className='text-lg'>
                                {convertPrice(85000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-3/4 flex flex-col items-center justify-center gap-y-4 -me-24'>
                        <div dir='rtl' className='w-full flex flex-row items-center justify-between fontMorvarid'>
                            <h4 className='text-2xl font-bold'>
                                لاته
                            </h4>
                            <h6 className='text-lg'>
                                {convertPrice(30000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-1 bg-brown-800 rounded-full' />
                    </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <Image
                        className='h-auto w-full z-20 bg-gradient-radial from-[1%] to-[60%] from-brown-700/40 to-[#221518]'
                        src={menu}
                        alt="menu"
                        width={500}
                        height={500}
                        quality={90}
                        loading='lazy'
                    />
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-y-16 text-brown-500'>
                    <div className='w-3/4 flex flex-col items-center justify-center gap-y-4 -ms-24'>
                        <div dir='rtl' className='w-full flex flex-row items-center justify-between fontMorvarid'>
                            <h4 className='text-2xl font-bold'>
                                چاکلت
                            </h4>
                            <h6 className='text-lg'>
                                {convertPrice(50000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-3/4 flex flex-col items-center justify-center gap-y-4'>
                        <div dir='rtl' className='w-full flex flex-row items-center justify-between fontMorvarid'>
                            <h4 className='text-2xl font-bold'>
                                اسپرسو
                            </h4>
                            <h6 className='text-lg'>
                                {convertPrice(85000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-1 bg-brown-800 rounded-full' />
                    </div>

                    <div className='w-3/4 flex flex-col items-center justify-center gap-y-4 -ms-24'>
                        <div dir='rtl' className='w-full flex flex-row items-center justify-between fontMorvarid'>
                            <h4 className='text-2xl font-bold'>
                                لاته
                            </h4>
                            <h6 className='text-lg'>
                                {convertPrice(30000)} تومان
                            </h6>
                        </div>
                        <span className='w-full h-1 bg-brown-800 rounded-full' />
                    </div>
                </div>

                <>
                    <Image
                        className='size-28 absolute left-8 top-8'
                        width={100}
                        height={100}
                        src={bean1}
                        alt="coffee-bean-1"
                        quality={100}
                        loading='lazy'
                    />
                    <Image
                        className='size-28 absolute left-20 top-28'
                        width={100}
                        height={100}
                        src={bean1}
                        alt="coffee-bean-1"
                        quality={100}
                        loading='lazy'
                    />
                    <Image
                        className='size-24 absolute right-20 bottom-28'
                        width={100}
                        height={100}
                        src={bean2}
                        alt="coffee-bean-2"
                        quality={100}
                        loading='lazy'
                    />
                    <Image
                        className='size-28 absolute right-8 bottom-8'
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