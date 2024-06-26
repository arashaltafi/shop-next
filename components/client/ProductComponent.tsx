"use client"

import { addProductToStorage, convertPrice } from '@/utils/Product'
import Image from 'next/image'
import React from 'react'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { Button } from '@mui/material'
import { useAppDispatch } from '@/libs/hooks'
import { addProductCount } from '@/libs/features/productSlice'
import { showToast } from '@/utils/Toast'
import { ToastContainer } from 'react-toastify'

interface ProductComponentProps {
    data: {
        id: number,
        productId: number,
        name: string,
        description: string,
        image: string,
        price: number
    }
}

const ProductComponent = (props: ProductComponentProps) => {
    const dispatch = useAppDispatch()

    const handleSubmitBasket = () => {
        addProductToStorage(props.data.productId)
        dispatch(addProductCount())
    }

    const handleClickReport = (isYes: boolean) => {
        console.log('report:', isYes)
        showToast('از ثبت گزارش شما متشکریم', 'success')
    }

    return (
        <div className='w-full h-full flex flex-col-reverse sm:flex-row gap-y-8 gap-x-2 sm:gap-x-6 md:gap-x-8 items-center sm:items-stretch rounded-xl px-2 py-4 sm:py-6 md:py-8 justify-between border-2 border-solid border-brown-900'>
            <ToastContainer />
            <div className='w-full sm:w-2/3 flex flex-col gap-8 items-center sm:items-end justify-between text-end'>
                <h3 className='text-white text-sm sm:text-base lg:text-lg line-clamp-2 text-ellipsis'>{props.data.name}</h3>
                <h5 className='text-brown-100 text-xs sm:text-sm lg:text-base'>توضیحات: {props.data.description}</h5>
                <h6 dir='rtl' className='text-brown-300 text-xs sm:text-xs lg:text-sm'>قیمت: {convertPrice(props.data.price)} تومان</h6>
                <div className='flex flex-col-reverse sm:flex-row items-center justify-end w-full gap-y-6 gap-x-4'>
                    <div className='flex flex-row items-center justify-center gap-x-4'>
                        <button onClick={() => handleClickReport(false)} className='text-yellow-400 hover:text-yellow-500 transition-all hover:scale-105 duration-150 cursor-pointer'>خیر</button>
                        <span className='w-px h-4 bg-brown-500 rounded-full' />
                        <button onClick={() => handleClickReport(true)} className='text-yellow-400 hover:text-yellow-500 transition-all hover:scale-105 duration-150 cursor-pointer'>بله</button>
                    </div>
                    <h6 dir='rtl' className='text-brown-300 text-xs sm:text-xs lg:text-sm'>آیا قیمت مناسب تری سراغ دارید؟</h6>
                </div>
            </div>
            <div className='w-full sm:w-1/3 flex flex-col items-center justify-center'>
                <Image
                    className='h-auto w-full hover:brightness-110 transition-all duration-150 cursor-pointer'
                    src={props.data.image}
                    alt={props.data.name}
                    width={800}
                    height={800}
                    quality={100}
                    priority
                    loading='eager'
                />
                <Button
                    onClick={handleSubmitBasket}
                    className='mt-8'
                    size='large'
                    variant="contained"
                    color='success'
                    startIcon={<AddShoppingCartOutlinedIcon />}
                >
                    افزودن به سبد خرید
                </Button>
            </div>
        </div>
    )
}

export default ProductComponent