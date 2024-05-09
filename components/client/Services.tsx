"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const coffee = '/images/coffee.svg'
const support = '/images/support.svg'
const pitcher = '/images/pitcher.svg'
const delivery = '/images/express-delivery.svg'

const Services = () => {
    const [service, setService] = useState<{
        id: number, title: string, description: string, image: string
    }[]>([])

    useEffect(() => {
        setService([
            {
                id: 1,
                title: 'رست تخصصی',
                description: 'تازه برشته شده و با کیفیت',
                image: coffee,
            }, {
                id: 2,
                title: 'پشتیبانی شبانه روزی',
                description: '7 روز هفته ، 24 ساعته',
                image: support,
            }, {
                id: 3,
                title: 'امکان تحویل اکسپرس',
                description: 'ارسال بسته با سرعت باد',
                image: delivery,
            }, {
                id: 4,
                title: 'اکسسوری قهوه',
                description: 'وسایل و ادوات دم آوری',
                image: pitcher,
            }
        ])
    }, [])

    return (
        <div className='select-none mt-20 grid grid-cols-2 items-center justify-center gap-y-20 gap-x-16'>
            {
                service.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-row items-center justify-center gap-4'>
                        <div className='w-full flex flex-col items-center justify-center gap-3'>
                            <h2 className='w-full text-2xl text-end'>
                                {item.title}
                            </h2>
                            <h3 className='w-full text-lg text-end font-light'>
                                {item.description}
                            </h3>
                        </div>
                        <Image
                            className='size-28'
                            src={item.image}
                            alt='coffee'
                            width={100}
                            height={100}
                            quality={100}
                            loading='lazy'
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Services