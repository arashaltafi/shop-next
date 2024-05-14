"use client"

import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import Image from 'next/image'
import React, { ReactElement, useEffect, useState } from 'react'
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import CoffeeMakerRoundedIcon from '@mui/icons-material/CoffeeMakerRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';

const About = () => {
    const [items, setItems] = useState<{
        id: number,
        icon: ReactElement,
        title: string,
        description: string
    }[]>([])

    useEffect(() => {
        setItems([
            {
                id: 1,
                title: 'بسته بندی',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
                icon: <Inventory2RoundedIcon sx={{ width: 50, height: 50 }} />
            }, {
                id: 2,
                title: 'مواد اولیه',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
                icon: <CoffeeMakerRoundedIcon sx={{ width: 50, height: 50 }} />
            }, {
                id: 3,
                title: 'پشتیبانی',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
                icon: <SupportAgentRoundedIcon sx={{ width: 50, height: 50 }} />
            }, {
                id: 4,
                title: 'تحویل سریع',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
                icon: <DeliveryDiningRoundedIcon sx={{ width: 50, height: 50 }} />
            }
        ])
    }, [])

    return (
        <div className='select-none w-full flex flex-col gap-24 sm:gap-36 md:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>داستان قهوه آنلاین:</h1>
                <div className='mt-8 flex flex-col md:flex-row items-center justify-center gap-8'>
                    <Image
                        src={'/images/coffee-cup-1.png'}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-110 cursor-pointer transition-all duration-150'
                        alt='coffee cup'
                        priority
                        loading='eager'
                        quality={100}
                    />

                    <p dir='rtl' className='w-full text-brown-100 text-sm font-light leading-6 sm:leading-8 list-disc text-ellipsis text-center md:text-justify'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>

                <Image
                    src={'/images/divider-coffee.png'}
                    width={500}
                    height={500}
                    className='w-full md:w-2/3 h-16 sm:h-20 my-16 sm:my-24 md:my-32 brightness-200'
                    alt='coffee divider'
                    priority
                    loading='eager'
                    quality={100}
                />

                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>اهداف قهوه آنلاین:</h1>
                <div className='mt-8 flex flex-col md:flex-row items-center justify-center gap-8'>
                    <p dir='rtl' className='w-full text-brown-100 text-sm font-light leading-6 sm:leading-8 list-disc text-ellipsis text-center md:text-justify'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>

                    <Image
                        src={'/images/coffee-cup-2.png'}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-110 cursor-pointer transition-all duration-150'
                        alt='coffee cup'
                        priority
                        loading='eager'
                        quality={100}
                    />
                </div>

                <Image
                    src={'/images/divider-coffee.png'}
                    width={500}
                    height={500}
                    className='w-full md:w-2/3 h-16 sm:h-20 my-16 sm:my-24 md:my-32 brightness-200'
                    alt='coffee divider'
                    priority
                    loading='eager'
                    quality={100}
                />

                <h1 dir='rtl' className='text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>ارزش های قهوه آنلاین:</h1>
                <div className='mt-16 w-full grid justify-items-center grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8 -px-2 sm:-px-5 md:-px-8 lg:-px-14 xl:-px-16'>
                    {
                        items.map((item) => (
                            <div key={item.id} dir='rtl' className='w-full flex flex-col items-center justify-center content-center gap-8 text-center'>
                                {item.icon}
                                <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold'>{item.title}</h2>
                                <h5 className='text-xs md:text-sm lg:text-base font-thin line-clamp-4 text-ellipsis'>{item.description}</h5>
                            </div>
                        ))
                    }
                </div>

                <Image
                    src={'/images/divider-coffee.png'}
                    width={500}
                    height={500}
                    className='w-full md:w-2/3 h-16 sm:h-20 my-16 sm:my-24 md:my-32 brightness-200'
                    alt='coffee divider'
                    priority
                    loading='eager'
                    quality={100}
                />

                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>چشم انداز قهوه آنلاین:</h1>
                <div className='mt-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8'>
                    <ul dir='rtl' className='w-full flex flex-col items-center md:items-start justify-center gap-8 text-center'>
                        <li className='text-sm sm:text-base md:text-lg list-disc'>ایجاد برندینگ قوی</li>
                        <li className='text-sm sm:text-base md:text-lg list-disc'>ایجاد شعب در تمامی استان‌ها</li>
                        <li className='text-sm sm:text-base md:text-lg list-disc'>حضور در نمایشگاه‌های مختلف بین‌المللی</li>
                        <li className='text-sm sm:text-base md:text-lg list-disc'>ایجاد نوآوری بیشتر و تحقق هرچه بیشتر انتقال حس خوب</li>
                    </ul>

                    <Image
                        src={'/images/coffee-cup-4.png'}
                        width={500}
                        height={500}
                        className='w-64 sm:w-80 md:w-96 h-auto hover:brightness-110 cursor-pointer transition-all duration-150'
                        alt='coffee cup'
                        priority
                        loading='eager'
                        quality={100}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About