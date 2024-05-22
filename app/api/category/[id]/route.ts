import { NextRequest } from 'next/server'

interface ParamsType {
    params: { id: string }
}

export async function GET(req: NextRequest, { params }: ParamsType) {
    const id = params.id
    if (id === 'undefined' || id === '' || id === null || id === undefined) {
        return Response.json({ error: 'لطفا یک آدرس صحیح وارد نمایید' }, { status: 400 })
    }
    const allowedRoutes = ['allBestSellers', 'allLastest', 'تجهیزات', 'شیرینی', 'انواع قهوه', 'بیرون بر', 'میکس های اسپرسو']
    if (allowedRoutes.includes(id)) {
        return Response.json({ params: params.id }, { status: 200 })
    }
    return Response.json({ error: 'آدرس مورد نظر موجود نیست' }, { status: 404 })
}