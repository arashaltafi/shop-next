import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import { notFound } from 'next/navigation'
import React from 'react'

const Product = async ({ params }: { params: { id: string[] } }) => {

    params.id.length > 2 && notFound()
    console.log('params.id:', params.id)

    return (
        <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                    {params.id[0]}
                </h1>
                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                    {decodeURIComponent(params.id[1])}
                </h1>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
            </div>
            <BottomBar />
            <Footer />
        </div>
    )
}

export default Product