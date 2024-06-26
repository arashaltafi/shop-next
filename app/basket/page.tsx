"use client"

import PopupMenu from '@/components/both/PopupMenu'
import BottomBar from '@/components/client/BottomBar'
import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import { showToast } from '@/utils/Toast'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Image from 'next/image'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { addProductToStorage, convertPrice, convertPriceAll } from '@/utils/Product'
import { useAppDispatch } from '@/libs/hooks'
import { addProductCount, deleteAllProduct } from '@/libs/features/productSlice'
import { Button } from '@mui/material'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useRouter } from 'next/navigation'

const Basket = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const [basketProduct, setBasketProduct] = useState<{
        id: number, productId: number, name: string, description: string, image: string, price: number, quantity: number
    }[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const basket = localStorage.getItem('basket')

        if (basket) {
            const response = await fetch(`${process.env.BASE_URL}/basket`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: basket
            })
            const data = await response.json()

            if (response.status !== 200) {
                showToast(data.error, 'error')
            } else {
                setBasketProduct(data.data)
            }
        }
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = (item: string) => {
        if (item == 'حذف همه') {
            if (basketProduct.length > 0) {
                localStorage.removeItem('basket')
                setBasketProduct([])
                dispatch(deleteAllProduct())
                showToast('سبد خرید شما با موفقیت حذف شد', 'success')
            } else {
                showToast('سبد خرید شما خالی است', 'error')
            }
        }
    }

    const handleProduct = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'undefined' || target.id === '' || target.id === null || target.id == undefined) return

        if (target.id.includes('minus')) {
            const targetId = parseInt(target.id.replace('minus-', ''))
            if (isNaN(targetId) || targetId < 1) return

            addProductToStorage(targetId, true)
            dispatch(addProductCount())
            setBasketProduct(prev => prev.map(item => {
                if (item.productId == targetId) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item
            }))
        } else if (target.id.includes('plus')) {
            const targetId = parseInt(target.id.replace('plus-', ''))
            if (isNaN(targetId) || targetId < 1) return

            addProductToStorage(targetId)
            dispatch(addProductCount())
            setBasketProduct(prev => prev.map(item => {
                if (item.productId == targetId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            }))
        } else if (target.id.includes('delete')) {
            const targetId = parseInt(target.id.replace('delete-', ''))
            if (isNaN(targetId) || targetId < 1) return

            addProductToStorage(targetId, true)
            dispatch(addProductCount())
            setBasketProduct(prev => prev.filter(item => {
                if (item.productId !== targetId) {
                    return item
                }
            }))
            //for update id (fix divider in ui)
            setBasketProduct(prev => prev.map((item, index) => {
                return {
                    id: index + 1,
                    productId: item.productId,
                    name: item.name,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity
                }
            }))

            showToast('محصول با موفقیت حذف شد', 'success')
        } else {
            return
        }
    }

    const handleSubmitBasket = () => {
        router.push('/basket/checkout')
    }

    return (
        <>
            <ToastContainer />
            <div className='w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
                <Header isFromMainHeader={false} />
                <div className='flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                    <div className='flex flex-row-reverse md:flex-row items-center justify-between w-full'>
                        <div
                            className='hidden md:block cursor-pointer hover:bg-brown-500 p-3 rounded-full transition-all duration-150 group'
                            onClick={handleClickMenu}
                        >
                            <MoreVertOutlinedIcon className='group-hover:scale-110 transition-all' />
                        </div>
                        <h1 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>
                            سبد خرید
                        </h1>
                    </div>

                    <PopupMenu
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        menuItems={['حذف همه']}
                        onClickMore={(item) => handleCloseMenu(item)}
                    />

                    <h4 className='self-end text-brown-100 text-base'>
                        اینجا میتوانید سبد خرید خود را مشاهده کنید
                    </h4>
                    <h6 dir='rtl' className='self-end text-brown-300 text-sm'>
                        {basketProduct.length} کالا
                    </h6>
                    {
                        basketProduct.length > 0 ?
                            <div className='w-full flex flex-col gap-y-8 items-center justify-center'>
                                <div className='w-full flex flex-col gap-y-8 items-center justify-center sm:border border-solid border-brown-100 rounded-lg px-1 py-1 sm:px-2 sm:py-2 md:px-8 md:py-6'>
                                    {
                                        basketProduct?.map((product) => (
                                            <div key={product.id} className='w-full flex flex-col'>
                                                <span className={`w-full h-px rounded-full bg-brown-100/50 mt-1 mb-8 ${product.id == 1 && 'hidden'}`} />

                                                <div className='w-full h-full flex flex-row gap-x-2 sm:gap-x-6 md:gap-x-8 items-stretch rounded-xl px-2 py-4 sm:py-6 md:py-8 justify-between bg-brown-900'>
                                                    <div className='w-2/3 flex flex-col items-end justify-between text-end'>
                                                        <h3 className='text-white text-sm sm:text-base lg:text-lg line-clamp-2 text-ellipsis'>{product.name}</h3>
                                                        <h5 className='text-brown-100 text-xs sm:text-sm lg:text-base'>توضیحات: {product.description}</h5>
                                                        <h6 dir='rtl' className='text-brown-300 text-xs sm:text-xs lg:text-sm'>قیمت: {convertPrice(product.price)} تومان</h6>
                                                        <h6 dir='rtl' className='text-brown-100 text-xs sm:text-sm lg:text-base'>تعداد: {product.quantity}</h6>
                                                        <h6 dir='rtl' className='text-brown-300 text-xs sm:text-xs lg:text-sm'>قیمت مجموع: {convertPriceAll(product.price, product.quantity)} تومان</h6>
                                                    </div>
                                                    <div className='w-1/3 flex flex-col items-center justify-center'>
                                                        <Image
                                                            className='h-auto w-full hover:brightness-110 transition-all duration-150 cursor-pointer'
                                                            src={product.image}
                                                            alt={product.name}
                                                            width={800}
                                                            height={800}
                                                            quality={100}
                                                            loading='lazy'
                                                        />
                                                        <div
                                                            onClick={(e) => handleProduct(e)}
                                                            className='flex flex-row items-center justify-between gap-x-2 md:gap-x-4 lg:gap-x-6 border border-solid border-brown-200 rounded-md px-1 py-0.5 sm:px-2 sm:py-1 md:px-4 md:py-2 child:cursor-pointer'>
                                                            {
                                                                product.quantity > 1 ?
                                                                    <div className='relative group'>
                                                                        <RemoveRoundedIcon id={`minus-${product.productId}`} fontSize='small' className='group-hover:bg-brown-700 rounded-full' />
                                                                        <span id={`minus-${product.productId}`} className='absolute inset-0' />
                                                                    </div> :
                                                                    <div className='relative group'>
                                                                        <DeleteRoundedIcon fontSize='small' className='group-hover:bg-brown-700 rounded-full' />
                                                                        <span id={`delete-${product.productId}`} className='absolute inset-0' />
                                                                    </div>
                                                            }
                                                            <h5
                                                                className='text-brown-100 text-sm sm:text-base'
                                                                style={{ cursor: 'default' }}>
                                                                {product.quantity}
                                                            </h5>
                                                            <div className='relative group'>
                                                                <AddRoundedIcon fontSize='small' className='group-hover:bg-brown-700 rounded-full' />
                                                                <span id={`plus-${product.productId}`} className='absolute inset-0' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <Button
                                    onClick={handleSubmitBasket}
                                    className='mt-8 self-start'
                                    size='large'
                                    variant="contained"
                                    color='success'
                                    startIcon={<LocalMallRoundedIcon />}
                                >
                                    تایید و تکمیل سفارش
                                </Button>
                            </div>
                            :
                            <p className='mt-8 text-brown-100 text-base'>
                                سبد خرید شما خالی است
                            </p>
                    }
                </div>
                <BottomBar />
                <Footer />
            </div>
        </>
    )
}

export default Basket