import { NextRequest } from 'next/server'
import productList from '../MockData'

export async function POST(req: NextRequest) {
    const basketList = await req.json()

    const data = basketList.map((basket: any) => {
        const product = productList.find((product: any) => product.productId === basket.productId)
        return {
            id: product?.id,
            productId: basket.productId,
            quantity: basket.quantity,
            name: product?.name,
            description: product?.description,
            image: product?.image,
            price: product?.price
        }
    })

    return Response.json({ data: data }, { status: 200 })
}