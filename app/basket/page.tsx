"use client"

import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import React, { useEffect, useState } from 'react'

const Basket = () => {
    const [basketProduct, setBasketProduct] = useState<{
        // id: number, productId: number, name: string, description: string, image: string, price: number, quantity: number
        id: number, productId: number, quantity: number
    }[]>([])

    useEffect(() => {
        //TODO call api POST { productId: number, quantity: number } and return { id: number, productId: number, name: string, description: string, image: string, price: number, quantity: number } from server
        const basket = localStorage.getItem('basket')
        if (basket) {
            setBasketProduct(
                JSON.parse(basket).map((product: any, index: number) => ({
                    id: index + 1,
                    ...product
                }))
            )
        }
    }, [])


    useEffect(() => {
        console.log(basketProduct)
    }, [basketProduct])

    return (
        <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                    سبد خرید
                </h1>
                <div>
                    {
                        basketProduct?.map((product) => (
                            <div key={product.id}>
                                <div>
                                    <h1>{product.productId}</h1>
                                    <h1>{product.quantity}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <BottomBar />
            <Footer />
        </div>
    )
}

export default Basket