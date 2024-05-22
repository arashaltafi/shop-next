import { NextRequest } from 'next/server'
const product1 = '/images/p1.png';
const product2 = '/images/p2.png';
const product3 = '/images/p3.png';
const product4 = '/images/p4.png';
const product5 = '/images/p5.png';
const product6 = '/images/p6.png';
const product7 = '/images/p7.png';
const product8 = '/images/p8.png';

interface ParamsType {
    params: { id: string }
}

export async function GET(req: NextRequest, { params }: ParamsType) {
    const id = params.id
    if (id === 'undefined' || id === '' || id === null || id === undefined) {
        return Response.json({ error: 'لطفا یک آدرس صحیح وارد نمایید' }, { status: 400 })
    }
    const productList = [
        {
            id: 1,
            productId: 1001,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '20 - 80',
            image: product1,
            price: 50000
        }, {
            id: 2,
            productId: 1002,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '50 - 50',
            image: product2,
            price: 85000
        }, {
            id: 3,
            productId: 1003,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '60 - 40',
            image: product3,
            price: 48000
        }, {
            id: 4,
            productId: 1004,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '70 - 30',
            image: product4,
            price: 25000
        }, {
            id: 5,
            productId: 1005,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '20 - 80',
            image: product5,
            price: 36000
        }, {
            id: 6,
            productId: 1006,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '10 - 90',
            image: product6,
            price: 44000
        }, {
            id: 7,
            productId: 1007,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '10 - 90',
            image: product7,
            price: 84000
        }, {
            id: 8,
            productId: 1008,
            name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
            description: '10 - 90',
            image: product8,
            price: 79000
        }
    ]

    const allowedRoutes = ['پرفروش ترین ها', 'آخرین ها', 'تجهیزات', 'شیرینی', 'انواع قهوه', 'بیرون بر', 'میکس های اسپرسو']
    if (allowedRoutes.includes(id)) {
        return Response.json({ title: params.id, list: productList }, { status: 200 })
    }
    return Response.json({ error: 'آدرس مورد نظر موجود نیست' }, { status: 404 })
}