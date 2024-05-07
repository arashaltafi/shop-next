import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='mt-20 grid grid-cols-2 items-center justify-center gap-y-20 gap-x-16'>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='w-full flex flex-col items-center justify-center gap-3'>
                    <h2 className='w-full text-2xl text-end'>
                        رست تخصصی
                    </h2>
                    <h3 className='w-full text-lg text-end font-light'>
                        تازه برشته شده و با کیفیت
                    </h3>
                </div>
                <Image
                    className='size-28'
                    src={'/images/coffee.svg'}
                    alt='coffee'
                    width={100}
                    height={100}
                    quality={100}
                    loading='lazy'
                />
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='w-full flex flex-col items-center justify-center gap-3'>
                    <h2 className='w-full text-2xl text-end'>
                        پشتیبانی شبانه روزی
                    </h2>
                    <h3 className='w-full text-lg text-end font-light'>
                        7 روز هفته ، 24 ساعته
                    </h3>
                </div>
                <Image
                    className='size-28'
                    src={'/images/support.svg'}
                    alt='coffee'
                    width={100}
                    height={100}
                    quality={100}
                    loading='lazy'
                />
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='w-full flex flex-col items-center justify-center gap-3'>
                    <h2 className='w-full text-2xl text-end'>
                        اکسسوری قهوه
                    </h2>
                    <h3 className='w-full text-lg text-end font-light'>
                        وسایل و ادوات دم آوری
                    </h3>
                </div>
                <Image
                    className='size-28'
                    src={'/images/pitcher.svg'}
                    alt='coffee'
                    width={100}
                    height={100}
                    quality={100}
                    loading='lazy'
                />
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='w-full flex flex-col items-center justify-center gap-3'>
                    <h2 className='w-full text-2xl text-end'>
                        امکان تحویل اکسپرس
                    </h2>
                    <h3 className='w-full text-lg text-end font-light'>
                        ارسال بسته با سرعت باد
                    </h3>
                </div>
                <Image
                    className='size-28'
                    src={'/images/express-delivery.svg'}
                    alt='coffee'
                    width={100}
                    height={100}
                    quality={100}
                    loading='lazy'
                />
            </div>
        </div>
    )
}

export default Services