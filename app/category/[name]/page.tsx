import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

const CategoryName = async ({ params }: { params: { name: string } }) => {
    const response = await fetchData(params.name)

    return (
        <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <p>{response.params}</p>
                <p> </p>
                <p> </p>
                <p> </p>
            </div>
            <BottomBar />
            <Footer />
        </div>
    )
}

export default CategoryName

const fetchData = async (name: string) => {
    const res = await fetch(`http://localhost:3000/api/category/${name}`)
    if (res.status === 404) {
        notFound()
    } else if (res.status === 400) {
        redirect('/')
    } else {
        const response = await res.json()
        return response
    }
}