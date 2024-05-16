import React from 'react'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'

const Blog = () => {
    return (
        <div className='select-none w-full flex flex-col gap-24 sm:gap-36 md:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                Blog
            </div>
            <Footer />
        </div>
    )
}

export default Blog