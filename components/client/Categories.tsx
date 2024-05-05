import Image from 'next/image'
import React from 'react'
const equipment = '/images/equipment.png';
const espresso = '/images/espresso.png';
const sweets = '/images/sweets.png';
const getOut = '/images/get-out.png';
const typesCoffee = '/images/types-coffee.png';

const Categories = () => {
    return (
        <div className='select-none mt-20 w-full flex flex-col items-center justify-center gap-12 px-16'>
            <h2 dir='rtl' className='self-end text-brown-200 text-5xl fontMorvarid'>
                دسته بندی محصولات:
            </h2>
            <div className='flex flex-row flex-wrap items-center justify-center gap-12'>
                <div className='flex flex-col gap-4 items-center justify-center group px-12 py-8 border border-solid border-brown-500 bg-gradient-to-br from-1% to-99% from-[#795548] to-[#8D6E63] rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-20 h-20 group-hover:grayscale transition-all'
                        src={equipment}
                        alt="equipment"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:grayscale transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        تجهیزات
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group px-12 py-8 border border-solid border-brown-500 bg-gradient-to-br from-1% to-99% from-[#795548] to-[#8D6E63] rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-20 h-20 group-hover:grayscale transition-all'
                        src={espresso}
                        alt="espresso"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:grayscale transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        میکس های اسپرسو
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group px-12 py-8 border border-solid border-brown-500 bg-gradient-to-br from-1% to-99% from-[#795548] to-[#8D6E63] rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-20 h-20 group-hover:grayscale transition-all'
                        src={sweets}
                        alt="sweets"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:grayscale transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        بیرون بر
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group px-12 py-8 border border-solid border-brown-500 bg-gradient-to-br from-1% to-99% from-[#795548] to-[#8D6E63] rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-20 h-20 group-hover:grayscale transition-all'
                        src={getOut}
                        alt="getOut"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:grayscale transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        انواع قهوه
                    </h6>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center group px-12 py-8 border border-solid border-brown-500 bg-gradient-to-br from-1% to-99% from-[#795548] to-[#8D6E63] rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[101%] active:scale-[99%]'>
                    <Image
                        className='w-20 h-20 group-hover:grayscale transition-all'
                        src={typesCoffee}
                        alt="typesCoffee"
                        width={200}
                        height={200}
                        quality={100}
                        loading='lazy'
                    />
                    <h6 className='text-xl text-brown-100 group-hover:grayscale transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                        شیرینی
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Categories