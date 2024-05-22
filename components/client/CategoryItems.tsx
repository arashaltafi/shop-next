"use client"

import { convertPrice } from '@/utils/Product';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { getDeviceSize } from '@/utils/GlobalUtils';
import React from 'react'

interface CategoryItemsProps {
    response: {
        id: number, name: string, description: string, image: string, price: number
    }[]
}

const CategoryItems = (props: CategoryItemsProps) => {

    const handleClickProduct = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'undefined' || target.id === '' || target.id === null) return

        if (target.id.includes('product')) {
            const targetId = parseInt(target.id.replace('product-', '')) || 0
            console.log('product clicked:', targetId)
        } else if (target.id.includes('order')) {
            const targetId = parseInt(target.id.replace('order-', '')) || 0
            console.log('order clicked:', targetId)
        } else {
            return
        }
    }

    return (
        <div
            className='flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16'
            onClick={(e) => handleClickProduct(e)}
        >
            {
                props?.response?.map(product => (
                    <Tilt
                        key={product.id}
                        gyroscope={true}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        transitionSpeed={3000}
                        perspective={1000}
                        tiltEnable={getDeviceSize() === 'xm' ? false : getDeviceSize() === 'sm' ? false : true}
                        tiltReverse={false}
                        reset={true}
                        glareColor={'#221518'}
                    >
                        <div
                            key={product.id}
                            className='relative bg-brown-900/5 group cursor-pointer flex flex-col items-center justify-center gap-4 rounded-xl p-[1px] border-2 border-solid border-brown-700 text-brown-200 hover:text-brown-100 hover:bg-brown-900 transition-all duration-200'>

                            <div className='relative w-full'>
                                <Image
                                    className='w-full h-44 sm:h-48 md:h-56 lg:h-60 xl:h-64 group-hover:brightness-110 transition-all bg-brown-500 rounded-t-xl rounded-b-sm'
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    quality={100}
                                    loading='lazy'
                                />
                                <span
                                    id={`product-${product.id}`}
                                    className='absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-bl from-[50%] via-[50%] to-[100%] from-transparent via-transparent to-brown-800 rounded-t-xl rounded-b-sm'
                                />
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2 font-light pb-4 sm:pb-8'>
                                <h3 id={`product-${product.id}`} dir='rtl' className='font-bold text-sm md:text-base lg:text-lg xl:text-xl text-ellipsis line-clamp-2 max-w-64 text-center'>
                                    {product.name}
                                </h3>
                                <div className='flex flex-col items-center justify-center'>
                                    <h4 dir='rtl' className='mt-2 fontMorvarid text-xs md:text-sm lg:text-base xl:text-lg text-ellipsis line-clamp-1 max-w-64'>
                                        {product.description}
                                    </h4>
                                    <h5 dir='rtl' className='text-xs md:text-sm lg:text-base xl:text-lg text-ellipsis line-clamp-1 max-w-64'>
                                        <span className='fontMorvarid'>{convertPrice(50000)}</span> تومان
                                    </h5>
                                </div>
                                <div id={`order-${product.id}`} className='block sm:hidden text-sm px-3 py-1.5 bg-brown-600 text-brown-200 drop-shadow-md rounded-md hover:bg-green-500'>
                                    سفارش
                                </div>
                            </div>

                            <div id={`order-${product.id}`} className='hidden sm:block z-40 text-base absolute -bottom-7 lg:-bottom-8 px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 bg-brown-600 text-brown-200 drop-shadow-md rounded-xl hover:bg-green-500 hover:scale-[101%] active:scale-[99%]'>
                                سفارش
                            </div>

                            <span id={`product-${product.id}`} className='hidden sm:block z-30 absolute inset-0' />
                        </div>
                    </Tilt>
                ))
            }
        </div>
    )
}

export default CategoryItems