"use client"

import { addProductToStorage, convertPrice } from '@/utils/Product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import Tilt from 'react-parallax-tilt';
import { getDeviceSize } from '@/utils/GlobalUtils';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/libs/hooks';
import { addProductCount } from '@/libs/features/productSlice'
const product1 = '/images/p1.png';
const product2 = '/images/p2.png';
const product3 = '/images/p3.png';
const product4 = '/images/p4.png';
const product5 = '/images/p5.png';
const product6 = '/images/p6.png';
const product7 = '/images/p7.png';
const product8 = '/images/p8.png';

const Lastest = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const [products, setProducts] = useState<{
        id: number, productId: number, name: string, description: string, image: string, price: number
    }[]>([])

    useEffect(() => {
        setProducts([
            {
                id: 1,
                productId: 1001,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '20 - 80',
                image: product1,
                price: 50000
            }, {
                id: 2,
                productId: 1002,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '50 - 50',
                image: product2,
                price: 85000
            }, {
                id: 3,
                productId: 1003,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '60 - 40',
                image: product3,
                price: 48000
            }, {
                id: 4,
                productId: 1004,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '70 - 30',
                image: product4,
                price: 25000
            }, {
                id: 5,
                productId: 1005,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '20 - 80',
                image: product5,
                price: 36000
            }, {
                id: 6,
                productId: 1006,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '10 - 90',
                image: product6,
                price: 44000
            }, {
                id: 7,
                productId: 1007,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '10 - 90',
                image: product7,
                price: 84000
            }, {
                id: 8,
                productId: 1008,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '10 - 90',
                image: product8,
                price: 79000
            }
        ])
    }, [])

    const handleClickProduct = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'undefined' || target.id === '' || target.id === null) return

        if (target.id.includes('product')) {
            const arrayId = target.id.split('-')
            if (arrayId.length < 3) return
            router.push(`/product/${arrayId[1]}/${arrayId[3]}`)
        } else if (target.id.includes('order')) {
            const targetId = parseInt(target.id.replace('order-', '')) || 0
            addProductToStorage(targetId)
            dispatch(addProductCount())
        } else {
            return
        }
    }

    const handleClickMore = () => {
        router.push('/category/آخرین ها')
    }

    return (
        <div className='select-none md:mt-12 lg:mt-16 xl:mt-20 w-full flex flex-col items-center justify-center gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-8 md:gap-y-10 lg:gap-y-12 xl:gap-y-16 px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
            <div className='flex flex-row items-center justify-between w-full'>
                <div
                    className='flex flex-row items-center justify-center gap-2 text-sm md:text-base xl:text-lg transition-all duration-200 cursor-pointer text-brown-200 hover:text-white hover:bg-brown-600 hover:scale-105 active:scale-95 rounded-xl px-4'
                    onClick={handleClickMore}
                >
                    <KeyboardArrowLeftRoundedIcon />
                    <h6 className='hidden md:block'>مشاهده همه</h6>
                    <h6 className='block md:hidden'>بیشتر</h6>
                </div>
                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                    آخرین ها:
                </h2>
            </div>
            <div
                className='flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16'
                onClick={(e) => handleClickProduct(e)}
            >
                {
                    products.map(product => (
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
                                        id={`product-${product.productId}-productName-${product.name}`}
                                        className='absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-bl from-[50%] via-[50%] to-[100%] from-transparent via-transparent to-brown-800 rounded-t-xl rounded-b-sm'
                                    />
                                </div>

                                <div className='flex flex-col items-center justify-center gap-2 font-light pb-4 sm:pb-8'>
                                    <h3 id={`product-${product.productId}-productName-${product.name}`} dir='rtl' className='font-bold text-sm md:text-base lg:text-lg xl:text-xl text-ellipsis line-clamp-2 max-w-64 text-center'>
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

                                <div id={`order-${product.productId}`} className='hidden sm:block z-40 text-base absolute -bottom-7 lg:-bottom-8 px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 bg-brown-600 text-brown-200 drop-shadow-md rounded-xl hover:bg-green-500 hover:scale-[101%] active:scale-[99%]'>
                                    سفارش
                                </div>

                                <span id={`product-${product.productId}-productName-${product.name}`} className='hidden sm:block z-30 absolute inset-0' />
                            </div>
                        </Tilt>
                    ))
                }
            </div>
        </div>
    )
}

export default Lastest