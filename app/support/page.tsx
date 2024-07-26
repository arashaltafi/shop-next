"use client"

import Footer from '@/components/client/Footer'
import Header from '@/components/client/Header'
import Image from 'next/image'
import React, { ReactElement, useEffect, useState } from 'react'
import DividerCoffee from '@/components/client/DividerCoffee'
import InstagramIcon from '@mui/icons-material/Instagram';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { openLink, openMail, openPhone } from '@/utils/GlobalUtils'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { FullscreenControl, GeolocateControl, ScaleControl } from 'react-map-gl';
import FormContact from '@/components/client/FormContact'

enum LinkType {
    TELEGRAM = 'telegram',
    WHATSAPP = 'whatsapp',
    INSTAGRAM = 'instagram',
    EMAIL = 'email',
    PHONE = 'phone',
}

const Support = () => {
    const [relationship, setRelationship] = useState<{
        id: number,
        icon: ReactElement,
        title: string,
        link: string,
        type: LinkType
    }[]>([])

    const [sale, setSale] = useState<{
        id: number,
        icon: ReactElement,
        title: string,
    }[]>([])

    useEffect(() => {
        setRelationship([
            {
                id: 1,
                title: 'تلگرام',
                link: 'https://t.me/arashaltafi1377',
                icon: <SendRoundedIcon className='text-yellow-500 group-hover:text-yellow-400' sx={{ width: 50, height: 50 }} />,
                type: LinkType.TELEGRAM
            }, {
                id: 2,
                title: 'واتساپ',
                link: 'https://api.whatsapp.com/send/?phone=989187677641',
                icon: <WhatsAppIcon className='text-yellow-500 group-hover:text-yellow-400' sx={{ width: 50, height: 50 }} />,
                type: LinkType.WHATSAPP
            }, {
                id: 3,
                title: 'اینستاگرام',
                link: 'https://instagram.com/arashaltafi',
                icon: <InstagramIcon className='text-yellow-500 group-hover:text-yellow-400' sx={{ width: 50, height: 50 }} />,
                type: LinkType.INSTAGRAM
            }, {
                id: 4,
                title: 'ایمیل',
                link: 'arashaltafi1377@gmail.com',
                icon: <EmailRoundedIcon className='text-yellow-500 group-hover:text-yellow-400' sx={{ width: 50, height: 50 }} />,
                type: LinkType.EMAIL
            }, {
                id: 5,
                title: 'شماره تماس',
                link: '+989187677641',
                icon: <LocalPhoneRoundedIcon className='text-yellow-500 group-hover:text-yellow-400' sx={{ width: 50, height: 50 }} />,
                type: LinkType.PHONE
            }
        ])

        setSale([
            {
                id: 1,
                title: 'بروز بودن قیمت ها',
                icon: <MonetizationOnOutlinedIcon className='text-[#221518]' sx={{ width: 50, height: 50 }} />,
            }, {
                id: 2,
                title: 'محصول اورجینال',
                icon: <StarBorderOutlinedIcon className='text-[#221518]' sx={{ width: 50, height: 50 }} />,
            }, {
                id: 3,
                title: 'خرید مطمئن',
                icon: <SafetyCheckOutlinedIcon className='text-[#221518]' sx={{ width: 50, height: 50 }} />,
            }, {
                id: 4,
                title: 'پرداخت سریع',
                icon: <CreditCardOutlinedIcon className='text-[#221518]' sx={{ width: 50, height: 50 }} />,
            }, {
                id: 5,
                title: 'پشتیبانی 9 الی 21',
                icon: <SupportAgentOutlinedIcon className='text-[#221518]' sx={{ width: 50, height: 50 }} />,
            }
        ])
    }, [])

    const handleClickRelationship = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'undefined' || target.id === '' || target.id === null) return

        if (target.id.includes('relationship')) {
            const targetId = parseInt(target.id.replace('relationship-', '')) || 0
            const targetRelationship = relationship.find(item => {
                return item.id == targetId
            })
            if (!targetRelationship || targetRelationship == undefined || targetRelationship == null) return

            if (targetRelationship.type == LinkType.EMAIL) {
                openMail(targetRelationship.link)
            } else if (targetRelationship.type == LinkType.PHONE) {
                openPhone(targetRelationship.link)
            } else {
                openLink(targetRelationship.link)
            }
        } else {
            return
        }
    }

    const [viewState, setViewState] = React.useState({
        latitude: 35.7009447852995,
        longitude: 51.39116262864598,
        zoom: 16
    })

    return (
        <div className='select-none w-full flex flex-col gap-8 md:gap-36 lg:gap-48 items-center justify-start'>
            <Header isFromMainHeader={false} />
            <div className='container flex flex-col gap-8 items-center justify-center w-full px-2 sm:px-5 md:px-8 lg:px-14 xl:px-16'>
                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>آدرس فروش حضوری:</h2>
                <div className='w-full mt-8 flex flex-col lg:flex-row items-center justify-between gap-8'>
                    <Map
                        mapboxAccessToken={process.env.MAPBOX_KEY || ''}
                        style={{ width: 320, height: 320, borderRadius: 14 }}
                        {...viewState}
                        onMove={evt => setViewState(evt.viewState)}
                        mapStyle="mapbox://styles/mapbox/dark-v10" //dark-v10   -   streets-v9
                        attributionControl={false}
                    >
                        <FullscreenControl />
                        <GeolocateControl />
                        <ScaleControl />
                    </Map>

                    <ul dir='rtl' className='flex flex-col items-center lg:items-start justify-center gap-12'>
                        <li className='list-disc flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center text-brown-100 text-sm font-light text-ellipsis md:text-justify'>
                            <h3 className='text-center text-lg font-bold'>شعبه 1:</h3>
                            <p className='text-center text-base'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            <h6 className='text-center text-sm text-yellow-300'>ساعت کاری (10 - 22)</h6>
                        </li>
                        <li className='list-disc flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center text-brown-100 text-sm font-light text-ellipsis md:text-justify'>
                            <h3 className='text-center text-lg font-bold'>شعبه 2:</h3>
                            <p className='text-center text-base'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            <h6 className='text-center text-sm text-yellow-300'>ساعت کاری (10 - 22)</h6>
                        </li>
                        <li className='list-disc flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center text-brown-100 text-sm font-light text-ellipsis md:text-justify'>
                            <h3 className='text-center text-lg font-bold'>شعبه 3:</h3>
                            <p className='text-center text-base'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            <h6 className='text-center text-sm text-yellow-300'>ساعت کاری (10 - 22)</h6>
                        </li>
                    </ul>
                </div>

                <DividerCoffee />

                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>فروش حضوری / آنلاین:</h2>
                <div
                    className={`w-full mt-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-8 px-16 py-8 bg-[url('/images/bg-0.png')] bg-no-repeat bg-cover rounded-xl`}
                >
                    {
                        sale.map(item => (
                            <div
                                key={item.id}
                                className='flex flex-col items-center justify-center gap-8'
                            >
                                {item.icon}
                                <h4 className='text-sm md:text-base lg:text-lg font-bold line-clamp-1 text-center -mx-8 text-[#221518]'>{item.title}</h4>
                            </div>
                        ))
                    }
                </div>

                <DividerCoffee />

                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>راه های ارتباطی:</h2>
                <div onClick={(e) => handleClickRelationship(e)} className='mt-8 flex flex-row flex-wrap items-center justify-center gap-8 group'>
                    {
                        relationship.map(item => (
                            <div
                                key={item.id}
                                className='relative w-full sm:w-2/3 md:w-1/3 xl:w-1/4 px-16 py-8 rounded-xl hover:rounded-lg hover:scale-[101%] active:scale-[99%] flex flex-col items-center justify-center gap-8 cursor-pointer transition-all duration-150 bg-brown-800 hover:bg-brown-900'
                            >
                                {item.icon}
                                <h4 className='text-lg font-bold line-clamp-1 text-center -mx-8'>{item.title}</h4>
                                <h6 className='text-base line-clamp-1 text-center -mx-8'>{item.link}</h6>
                                <span
                                    id={`relationship-${item.id}`}
                                    className='absolute top-0 right-0 left-0 bottom-0'
                                />
                            </div>
                        ))
                    }
                </div>

                <DividerCoffee />
                <h2 dir='rtl' className='self-end text-brown-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fontMorvarid'>فرم تماس با ما:</h2>
                <h5 dir='rtl' className='self-end text-brown-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>خوشحال می شویم نظرات خودتان را با ما در میان بگذارید.</h5>
                <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-x-16 items-center justify-center'>
                    <Image
                        src={'/images/coffee-cup-5.png'}
                        width={500}
                        height={500}
                        className='w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto hover:brightness-125 cursor-pointer transition-all duration-150'
                        alt='coffee cup'
                        priority
                        loading='eager'
                        quality={100}
                    />

                    <FormContact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Support