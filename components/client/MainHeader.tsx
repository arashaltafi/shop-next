import React from 'react'
import Header from './Header'
import Image from 'next/image'
const bg1 = '/images/bg-1.png'
const bg2 = '/images/bg-2.png'
const bg3 = '/images/bg-3.png'
const bg4 = '/images/bg-4.png'

const MainHeader = () => {
    return (
        <div className='select-none relative w-full h-[70vh] lg:h-[80vh] xl:h-[90vh] flex flex-row justify-between bg-gradient-to-bl from-[1%] to-[99%] from-[#7C573C] to-transparent customBorderBottom overflow-hidden'>
            <Header isFromMainHeader={true} />
            <div className='flex flex-col items-center justify-center ps-8 gap-12'>
                <Image
                    className='w-full h-auto shake2'
                    width={300}
                    height={300}
                    src={bg3}
                    placeholder='blur'
                    blurDataURL={bg3}
                    alt="background3"
                    quality={100}
                    loading='lazy'
                />
                <h2 className='shadow-title text-center text-2xl lg:text-3xl xl:text-4xl blink fontMorvarid'>
                    خرید آنلاین انواع قهوه
                </h2>
                <p className='text-center text-brown-300 text-base lg:text-lg xl:text-xl'>
                    فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
                </p>
            </div>
            <div className='relative w-full'>
                <Image
                    className='w-full h-full pt-16 lg:pt-12 xl:pt-8 z-20'
                    width={500}
                    height={500}
                    src={bg1}
                    placeholder='blur'
                    blurDataURL={bg1}
                    alt="background1"
                    quality={100}
                    loading='lazy'
                />
                <Image
                    className='absolute bottom-0 right-0 w-[90%] h-full -z-10 pt-36 shake3'
                    width={500}
                    height={500}
                    src={bg2}
                    placeholder='blur'
                    blurDataURL={bg2}
                    alt="background2"
                    quality={100}
                    loading='lazy'
                />
            </div>

            <Image
                className='hidden sm:block -z-10 w-full absolute top-0 bottom-0'
                src={bg4}
                width={500}
                height={500}
                placeholder='blur'
                blurDataURL={bg4}
                alt="background 4"
                quality={100}
                loading='lazy'
            />
        </div>
    )
}

export default MainHeader