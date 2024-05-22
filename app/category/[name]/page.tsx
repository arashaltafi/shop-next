import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import { notFound, redirect } from 'next/navigation'
import React from 'react'
import CategoryItems from '@/components/client/categoryItems';

type Product = {
    title: string,
    list: {
        id: number, name: string, description: string, image: string, price: number
    }[]
}

const CategoryName = async ({ params }: { params: { name: string } }) => {
    const response = await fetchData(params.name)

    return (
        <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='flex flex-col gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-8 md:gap-y-10 lg:gap-y-12 xl:gap-y-16 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h2 dir='rtl' className='w-full text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                    {response?.title}:
                </h2>
                <CategoryItems response={response.list} />
            </div>
            <BottomBar />
            <Footer />
        </div>
    )
}

export default CategoryName

const fetchData = async (name: string) => {
    const res = await fetch(`http://localhost:3000/api/category/${name}`, {
        cache: 'no-store'
    })
    if (res.status === 404) {
        notFound()
    } else if (res.status === 400) {
        redirect('/')
    } else {
        const response: Product = await res.json()
        return response
    }
}