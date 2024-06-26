"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
const banner2 = '/images/banner-2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner2 = () => {
    const [banners, setBanners] = useState<{
        id: number, title: string, description: string, image: string
    }[]>([])


    useEffect(() => {
        setBanners([
            {
                id: 1,
                title: 'خرید آنلاین انواع قهوه 1',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
                image: banner2
            }, {
                id: 2,
                title: 'خرید آنلاین انواع قهوه 2',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد ا پسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد ا پسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاتایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد ا ستفاده قرار گیرد.',
                image: banner2
            }
        ])
    }, [])

    return (
        <div className='md:mt-16 lg:mt-20 xl:mt-24 select-none w-full flex flex-col gap-0 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-center justify-center'>
            <Swiper
                className="w-full flex flex-row flex-nowrap items-center justify-center"
                style={{
                    padding: '32px 0px !important',
                    overflow: 'visible'
                }}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
            >
                {
                    banners.map((banner) => {
                        return (
                            <SwiperSlide key={banner.id}>
                                <div className='relative flex flex-row gap-8 items-center justify-between mx-auto w-[95%] lg:w-[90%] xl:w-[80%] xl:min-h-96 px-8 md:px-12 lg:px-14 xl:px-16 py-2 sm:py-4 md:py-6 lg:py-7 xl:py-8 bg-[#54372B] rounded-2xl border border-solid border-brown-500'>
                                    <h2 dir='rtl' className='w-full font-light text-sm md:text-base lg:text-lg xl:text-xl leading-8 text-brown-200 line-clamp-5 text-ellipsis md:text-justify'>
                                        {banner.description}
                                    </h2>

                                    <Image
                                        className='h-52 sm:h-64 md:h-72 lg:h-full lg:w-auto -mr-8 sm:-mr-10 md:-mr-12 lg:-mr-14 xl:-mr-16 cursor-pointer hover:brightness-125 transition-all duration-150'
                                        src={banner.image}
                                        alt="banner 2"
                                        width={500}
                                        height={500}
                                        quality={100}
                                        loading='lazy'
                                    />

                                    <h3 className='absolute -right-1 md:-right-2 lg:-right-3 xl:-right-5 -top-5 shadow-title-banner text-2xl md:text-3xl lg:text-4xl xl:text-5xl fontMorvarid'>
                                        {banner.title}
                                    </h3>

                                    <Image
                                        className='absolute bottom-0 left-0 w-full opacity-50 rounded-2xl'
                                        src={'/images/svg-wave-2.svg'}
                                        width={50}
                                        height={50}
                                        quality={100}
                                        alt='background wave'
                                        priority
                                        loading='eager'
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className='w-full flex flex-row gap-8 items-center justify-center'>
                {
                    banners.map((banner) => {
                        return (
                            <span key={banner.id} className='flex items-center justify-center text-center size-5 md:size-6 lg:size-7 xl:size-8 p-2 lg:p-3 xl:p-4 bg-brown-600 hover:bg-brown-900 transition-all rounded-full cursor-pointer' />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Banner2