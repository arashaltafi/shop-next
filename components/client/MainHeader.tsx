import React from 'react'
import Header from './Header'
import Image from 'next/image'
const bg1 = '/images/bg-1.png';
const bg2 = '/images/bg-2.png';
const bg3 = '/images/bg-3.png';

const MainHeader = () => {
    return (
        <div className='relative w-full h-[90vh] flex flex-row justify-between bg-gradient-to-bl from-1% to-99% from-[#7C573C] to-transparent customBorderBottom'>
            <Header />
            <div className='flex flex-col items-center justify-center ps-8 gap-12'>
                <Image
                    className='w-full h-auto shake2'
                    width={300}
                    height={300}
                    src={bg3}
                    alt="background3"
                    quality={100}
                    loading='lazy'
                />
                <h2 className='shadow-title text-4xl blink fontMorvarid'>
                    خرید آنلاین انواع قهوه
                </h2>
                <p className='text-center text-brown-300'>
                    فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
                </p>
            </div>
            <div className='relative w-full'>
                <Image
                    className='w-full h-full pt-8 z-20'
                    width={500}
                    height={500}
                    src={bg1}
                    alt="background1"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='absolute bottom-0 right-0 w-[90%] h-full -z-10 pt-36 shake3'
                    width={500}
                    height={500}
                    src={bg2}
                    alt="background2"
                    quality={100}
                    loading='lazy'
                />
            </div>
        </div>
    )
}

export default MainHeader