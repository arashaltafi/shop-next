import { NextRequest } from 'next/server'
import productList from '../MockData'

export async function POST(req: NextRequest) {
    const basketList = await req.json()

    const data = basketList.map((basket: any) => {
        const product = productList.find((product: any) => product.productId === basket.productId)
        if (product) {
            return {
                id: product?.id,
                productId: basket.productId,
                quantity: basket.quantity,
                name: product?.name,
                description: product?.description,
                image: product?.image,
                price: product?.price
            }
        }
    })

    if (data === undefined || data === null || data.length === 0 || data[0] == null) {
        return Response.json({ error: 'موردی یافت نشد' }, { status: 404 })
    }

    return Response.json({ data: data }, { status: 200 })
}