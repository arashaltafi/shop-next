"use client"

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type IFormInput = {
    name: string
    email: string
    title: string
    message: string
}

const FormContact = () => {
    const schema = yup.object().shape({
        name: yup.string().required('نام خود را وارد نمایید.').min(4, 'نام باید بیشتر از 4 کاراکتر باشد').max(30, 'نام باید کمتر از 30 کاراکتر باشد'),
        email: yup.string().email('ایمیل را صحیح وارد نمایید.').required('ایمیل را وارد نمایید.'),
        title: yup.string().required('عنوان را وارد نمایید.').min(4, 'عنوان باید بیشتر از 4 کاراکتر باشد').max(30, 'عنوان باید کمتر از 30 کاراکتر باشد'),
        message: yup.string().required('موضوع را وارد نمایید.').min(10, 'موضوع باید بیشتر از 10 کاراکتر باشد').max(200, 'موضوع باید کمتر از 200 کاراکتر باشد'),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        alert(JSON.stringify(data, null, 2)) //TODO send to server
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4' autoComplete='off'>
            <label dir='rtl' className='text-lg sm:text-xl text-brown-100'>نام:</label>
            <input
                dir='rtl'
                className='px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200'
                type="text"
                placeholder='نام و نام خانوادگی ...'
                {...register('name')}
            />
            {errors.name && <p className='text-xs sm:text-sm md:text-base text-red-400'>{errors.name?.message}</p>}

            <label dir='rtl' className='mt-2 sm:mt-4 text-lg sm:text-xl text-brown-100'>ایمیل:</label>
            <input
                className='text-start placeholder:text-end px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200'
                type="email"
                placeholder='... ایمیل'
                {...register('email')}
            />
            {errors.email && <p className='text-xs sm:text-sm md:text-base text-red-400'>{errors.email?.message}</p>}

            <label dir='rtl' className='mt-2 sm:mt-4 text-lg sm:text-xl text-brown-100'>عنوان:</label>
            <input
                dir='rtl'
                className='px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200'
                type="text"
                placeholder='عنوان / موضوع ...'
                {...register('title')}
            />
            {errors.title && <p className='text-xs sm:text-sm md:text-base text-red-400'>{errors.title?.message}</p>}

            <label dir='rtl' className='mt-2 sm:mt-4 text-lg sm:text-xl text-brown-100'>متن پیام:</label>
            <textarea
                dir='rtl'
                className='px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200 resize-none'
                rows={4}
                placeholder='متن پیام ...'
                {...register('message')}
            />
            {errors.message && <p className='text-xs sm:text-sm md:text-base text-red-400'>{errors.message?.message}</p>}

            <button className='w-2/3 mx-auto mt-8 btn btnPrimary py-4 sm:py-5 md:py-6' type="submit">ارسال</button>
        </form>
    )
}

export default FormContact