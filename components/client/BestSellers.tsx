"use client"

import { convertPrice } from '@/utils/Product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
const product1 = '/images/p1.png';
const product2 = '/images/p2.png';
const product3 = '/images/p3.png';
const product4 = '/images/p4.png';
const product5 = '/images/p5.png';
const product6 = '/images/p6.png';
const product7 = '/images/p7.png';
const product8 = '/images/p8.png';

const BestSellers = () => {
    const [products, setProducts] = useState<{
        id: number, name: string, description: string, image: string, price: number
    }[]>([])

    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '20 - 80',
                image: product1,
                price: 50000
            }, {
                id: 2,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '50 - 50',
                image: product2,
                price: 85000
            }, {
                id: 3,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '60 - 40',
                image: product3,
                price: 48000
            }, {
                id: 4,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '70 - 30',
                image: product4,
                price: 25000
            }, {
                id: 5,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '20 - 80',
                image: product5,
                price: 36000
            }, {
                id: 6,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '10 - 90',
                image: product6,
                price: 44000
            }, {
                id: 7,
                name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
                description: '10 - 90',
                image: product7,
                price: 84000
            }, {
                id: 8,
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
            const targetId = parseInt(target.id.replace('product-', '')) || 0
            console.log('product clicked:', targetId)
        } else if (target.id.includes('order')) {
            const targetId = parseInt(target.id.replace('order-', '')) || 0
            console.log('order clicked:', targetId)
        } else {
            return
        }
    }

    const handleClickMore = () => {
        console.log('handleClickMore')
    }

    return (
        <div className='select-none mt-20 w-full flex flex-col items-center justify-center gap-12 px-16'>
            <div className='flex flex-row items-center justify-between w-full'>
                <div
                    className='flex flex-row items-center justify-center gap-2 text-lg transition-all duration-200 cursor-pointer text-brown-200 hover:text-white hover:bg-brown-600 hover:scale-105 active:scale-95 rounded-xl px-4 py-2'
                    onClick={handleClickMore}
                >
                    <KeyboardArrowLeftRoundedIcon />
                    <h6>مشاهده همه</h6>
                </div>
                <h2 dir='rtl' className='self-end text-brown-200 text-5xl fontMorvarid'>
                    پرفروش ترین ها:
                </h2>
            </div>
            <div
                className='flex flex-row flex-wrap items-center justify-center gap-16'
                onClick={(e) => handleClickProduct(e)}
            >
                {
                    products.map(product => (
                        <div
                            key={product.id}
                            className='relative bg-brown-900/5 group cursor-pointer flex flex-col items-center justify-center gap-4 rounded-xl p-[1px] border-2 border-solid border-brown-700 text-brown-200 hover:text-brown-100 hover:bg-brown-900 transition-all duration-200'>
                            <div className='relative'>
                                <Image
                                    className='w-72 h-64 group-hover:brightness-110 transition-all bg-brown-500 rounded-t-xl rounded-b-sm'
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    quality={100}
                                    loading='lazy'
                                />
                                <span
                                    className='absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-bl from-[50%] via-[50%] to-[100%] from-transparent via-transparent to-brown-800 rounded-t-xl rounded-b-sm'
                                />
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2 font-light pb-8'>
                                <h3 dir='rtl' className='font-bold text-xl text-ellipsis line-clamp-2 max-w-64 text-center'>
                                    {product.name}
                                </h3>
                                <h4 dir='rtl' className='mt-2 fontMorvarid text-lg text-ellipsis line-clamp-1 max-w-64'>
                                    {product.description}
                                </h4>
                                <h5 dir='rtl' className='text-lg text-ellipsis line-clamp-1 max-w-64'>
                                    <span className='fontMorvarid'>{convertPrice(50000)}</span> تومان
                                </h5>
                            </div>

                            <div id={`order-${product.id}`} className='z-40 text-md absolute -bottom-8 px-5 py-3 bg-brown-600 text-brown-200 rounded-xl hover:bg-green-500 hover:scale-[101%] active:scale-[99%]'>
                                سفارش
                            </div>

                            <span id={`product-${product.id}`} className='z-30 absolute inset-0' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSellers