"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
const equipment = '/images/category1.png';
const espresso = '/images/category2.png';
const sweets = '/images/category3.png';
const getOut = '/images/category4.png';
const typesCoffee = '/images/category5.png';
const bg4 = '/images/bg-4.png';

const Categories = () => {
    const [category, setCategories] = useState<{
        id: number, title: string, image: string
    }[]>([])

    useEffect(() => {
        setCategories([
            {
                id: 1,
                title: 'تجهیزات',
                image: equipment,
            }, {
                id: 2,
                title: 'میکس های اسپرسو',
                image: espresso,
            }, {
                id: 3,
                title: 'بیرون بر',
                image: sweets,
            }, {
                id: 4,
                title: 'انواع قهوه',
                image: getOut,
            }, {
                id: 5,
                title: 'شیرینی',
                image: typesCoffee,
            }
        ])
    }, [])

    return (
        <div className='relative select-none md:mt-12 lg:mt-16 xl:mt-20 w-full flex flex-col items-center justify-center gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-12 px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
            <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                دسته بندی محصولات:
            </h2>
            <div className='flex flex-row flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
                {
                    category.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-col gap-4 items-center justify-center group transition-all cursor-pointer hover:scale-[101%] active:scale-[99%]'>
                            <Tilt
                                gyroscope={true}
                                glareEnable={true}
                                glareMaxOpacity={0.45}
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                transitionSpeed={2500}
                                perspective={500}
                                tiltEnable={true}
                                tiltReverse={false}
                                reset={true}
                                glareColor={'#221518'}
                            >
                                <Image
                                    className='size-32 sm:size-36 md:size-40 lg:size-44 xl:size-48 group-hover:brightness-110 transition-all overflow-hidden'
                                    src={item.image}
                                    alt={item.title}
                                    width={200}
                                    height={200}
                                    quality={100}
                                    loading='lazy'
                                />
                            </Tilt>
                            <h6 className='text-sm md:text-base lg:text-lg xl:text-xl text-brown-100 group-hover:brightness-110 transition-all font-light text-nowrap text-ellipsis line-clamp-1 text-center'>
                                {item.title}
                            </h6>
                        </div>
                    ))
                }
            </div>
            <Image
                className='-z-10 w-full absolute top-0 bottom-0'
                src={bg4}
                width={500}
                height={500}
                alt="background3"
                quality={100}
                loading='lazy'
            />
        </div>
    )
}

export default Categories