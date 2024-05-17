"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { generateRandomNumber } from '@/utils/GlobalUtils'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { useRouter } from 'next/navigation'
import { showToast } from '@/utils/Toast'

type IFormInput = {
    email: string
    password: string
}

const FormLogin = () => {
    const router = useRouter();

    const schema = yup.object().shape({
        email: yup.string().email('ایمیل را صحیح وارد نمایید.').required('ایمیل را وارد نمایید.'),
        password: yup.string().required('رمز عبور را وارد نمایید.').min(4, 'رمز عبور باید بیشتر از 4 کاراکتر باشد').max(30, 'رمز عبور باید کمتر از 30 کاراکتر باشد'),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (parseInt(inputCaptcha) === captcha) {
            apiCallLogin(data.email);
            reset()
        } else {
            showToast('لطفا کد امنیتی را صحیح وارد نمایید', 'error');
        }
    }

    const [captcha, setCaptcha] = useState<number>(generateRandomNumber());
    const [inputCaptcha, setInputCaptcha] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const regenerateCaptcha = () => {
        const newCaptcha = generateRandomNumber();
        setCaptcha(newCaptcha);
        setInputCaptcha('');
        drawCaptcha(newCaptcha);
    }

    useEffect(() => {
        regenerateCaptcha()
    }, [])

    const drawCaptcha = (captchaNumber: number) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = 'bold 32px vazir-light'; // Set Font
                ctx.fillStyle = 'white'; // Set text color
                ctx.textAlign = 'center'; // Align text in the center horizontally
                ctx.fillText(captchaNumber.toString(), canvas.width / 2, 25); // Position text at the center horizontally
                // ctx.strokeText(captchaNumber.toString(), canvas.width / 2, 25); // Position text at the center horizontally

                // Add random dots
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // Set a darker color for circles
                for (let i = 0; i < 100; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Add random lines
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'; // Set a darker color for lines
                for (let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.stroke();
                }

                // Add random small circles
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Set a darker color for circles
                for (let i = 0; i < 50; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    const radius = Math.random() * 4; // Random radius between 0 and 3
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();
                }

                const width = 20;
                const height = 20;
                const maxWH = Math.max(width, height);

                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Set a darker color for circles
                for (let i = 0; i < 10; i++) {
                    const size = Math.random() * maxWH;
                    const x = Math.random() * width - size / 2;
                    const y = Math.random() * height - size / 2;
                    ctx.fillRect(x, y, size, size);
                }
            }
        }
    }

    const apiCallLogin = async (email: string) => {
        //TODO fetch data
        showToast('ورود شما موفقیت آمیز بود', 'success');
        router.push('/')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-8 w-full flex flex-col gap-4' autoComplete='off'>
            <label dir='rtl' htmlFor='email' className='mt-2 sm:mt-4 text-lg sm:text-xl text-brown-100'>ایمیل:</label>
            <input
                id='email'
                className='text-start placeholder:text-end px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200'
                type="email"
                placeholder='... ایمیل'
                {...register('email')}
            />
            {errors.email && <p dir='rtl' className='text-xs sm:text-sm md:text-base text-red-400'>{errors.email?.message}</p>}

            <label dir='rtl' htmlFor='password' className='mt-2 sm:mt-4 text-lg sm:text-xl text-brown-100'>رمز عبور:</label>
            <input
                id='password'
                className='px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200'
                type="password"
                placeholder='رمز عبور ...'
                {...register('password')}
            />
            {errors.password && <p dir='rtl' className='text-xs sm:text-sm md:text-base text-red-400'>{errors.password?.message}</p>}

            <div className="mt-8 flex flex-col lg:flex-row gap-2 lg:gap-8 justify-center items-center pt-4">
                <canvas
                    ref={canvasRef}
                    className='bg-red-500 text-2xl py-2 px-4 rounded-md'
                    width={200}
                    height={40}
                />

                <div
                    className='m-2 cursor-pointer transition-all bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-full p-1'
                    onClick={regenerateCaptcha}
                >
                    <RefreshRoundedIcon sx={{
                        width: 22,
                        height: 22,
                    }} />
                </div>
            </div>

            <label dir='rtl' htmlFor='captcha' className='mt-2 sm:mt-4 text-lg sm:text-xl text-brown-100'>کد امنیتی:</label>
            <input
                id="captcha"
                type="number"
                placeholder='1234'
                value={inputCaptcha}
                maxLength={4}
                onChange={(e) => setInputCaptcha(e.currentTarget.value)}
                className='px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-white bg-brown-800 rounded-lg text-base sm:text-lg placeholder:text-brown-200'
            />

            <button className='w-2/3 mx-auto mt-8 btn btnPrimary py-3 sm:py-4 md:py-5' type="submit">ورود</button>
        </form>
    )
}

export default FormLogin