import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import { convertPrice } from '@/utils/Product'
import Image from 'next/image'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

type ProductType = {
    data: {
        id: number,
        productId: number,
        name: string,
        description: string,
        image: string,
        price: number
    }
}

const Product = async ({ params }: { params: { id: string[] } }) => {

    const response = await fetchData(params.id[0])

    return (
        <div className='w-full flex flex-col gap-16 sm:gap-20 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h1 dir='rtl' className='self-end text-brown-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                    {/* {decodeURIComponent(params.id[1])} */}
                    {response.data.name}
                </h1>
                <Image
                    className='w-1/2 h-auto hover:brightness-125 transition-all duration-150 cursor-pointer'
                    src={response.data.image}
                    alt={response.data.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    priority
                    loading='eager'
                />

                <h4>
                    {response.data.description}
                </h4>
                <h4 dir='rtl'>
                    {convertPrice(response.data.price)} تومان
                </h4>
            </div>
            <BottomBar />
            <Footer />
        </div>
    )
}

export default Product

const fetchData = async (name: string) => {
    const res = await fetch(`${process.env.BASE_URL}/product/${name}`, {
        next: {
            revalidate: 3600 // 1 hour
        }
    })
    if (res.status === 404) {
        notFound()
    } else if (res.status === 400) {
        redirect('/')
    } else {
        const response: ProductType = await res.json()
        return response
    }
}