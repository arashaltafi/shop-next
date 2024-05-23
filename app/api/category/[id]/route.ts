import { NextRequest } from 'next/server'
import productList from '../../MockData'

interface ParamsType {
    params: { id: string }
}

export async function GET(req: NextRequest, { params }: ParamsType) {
    const id = params.id
    if (id === 'undefined' || id === '' || id === null || id === undefined) {
        return Response.json({ error: 'لطفا یک آدرس صحیح وارد نمایید' }, { status: 400 })
    }

    const allowedRoutes = ['پرفروش ترین ها', 'آخرین ها', 'تجهیزات', 'شیرینی', 'انواع قهوه', 'بیرون بر', 'میکس های اسپرسو']
    if (allowedRoutes.includes(id)) {
        return Response.json({ title: params.id, list: productList }, { status: 200 })
    }
    return Response.json({ error: 'آدرس مورد نظر موجود نیست' }, { status: 404 })
}