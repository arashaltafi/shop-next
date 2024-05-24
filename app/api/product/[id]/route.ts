import { NextRequest } from 'next/server'
import productList from '../../MockData'
import { isEmptyObject } from '@/utils/GlobalUtils'

interface ParamsType {
    params: { id: string }
}

export async function GET(req: NextRequest, { params }: ParamsType) {
    const id = parseInt(params.id)
    if (isNaN(id) || id === 0 || id === null || id === undefined) {
        return Response.json({ error: 'لطفا یک آدرس صحیح وارد نمایید' }, { status: 400 })
    }

    const productSelected = productList.find(product => {
        return product.productId == id
    })

    if (isEmptyObject(productSelected)) {
        return Response.json({ error: 'آدرس مورد نظر موجود نیست' }, { status: 404 })
    } else {
        return Response.json({ data: productSelected }, { status: 200 })
    }
}