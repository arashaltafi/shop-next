import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import React from 'react'

const Basket = () => {
    return (
        <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                    سبد خرید
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

export default Basket