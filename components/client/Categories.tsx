import Image from 'next/image'
import React from 'react'
const equipment = '/images/category1.png';
const espresso = '/images/category2.png';
const sweets = '/images/category3.png';
const getOut = '/images/category4.png';
const typesCoffee = '/images/category5.png';

const Categories = () => {
    return (
        <div className='select-none mt-20 w-full flex flex-col items-center justify-center gap-12 px-16'>
            <h2 dir='rtl' className='self-end text-brown-200 text-5xl fontMorvarid'>
                دسته بندی محصولات:
            </h2>
            <div className='flex flex-row flex-wrap items-center justify-center gap-12'>
                <div className='flex flex-col gap-4 items-center justify-center group transition-all cursor-pointer hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-48 h-48 group-hover:brightness-110 transition-all overflow-hidden'
                        src={equipment}
                        alt="equipment"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:brightness-110 transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        تجهیزات
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group transition-all cursor-pointer hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-48 h-48 group-hover:brightness-110 transition-all overflow-hidden'
                        src={espresso}
                        alt="espresso"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:brightness-110 transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        میکس های اسپرسو
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group transition-all cursor-pointer hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-48 h-48 group-hover:brightness-110 transition-all overflow-hidden'
                        src={sweets}
                        alt="sweets"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:brightness-110 transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        بیرون بر
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group transition-all cursor-pointer hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-48 h-48 group-hover:brightness-110 transition-all overflow-hidden'
                        src={getOut}
                        alt="getOut"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:brightness-110 transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        انواع قهوه
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group transition-all cursor-pointer hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-48 h-48 group-hover:brightness-110 transition-all overflow-hidden'
                        src={typesCoffee}
                        alt="typesCoffee"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:brightness-110 transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        شیرینی
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Categories