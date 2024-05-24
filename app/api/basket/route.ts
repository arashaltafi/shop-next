import { NextRequest } from 'next/server'
import productList from '../MockData'

export async function POST(req: NextRequest) {
    const basketList = await req.json()

    const data = basketList.map((basket: any, index: number) => {
        const product = productList.find((product: any) => product.productId === basket.productId)
        if (product) {
            return {
                id: index + 1,
                productId: basket.productId,
                quantity: basket.quantity,
                name: product?.name,
                description: product?.description,
                image: product?.image,
                price: product?.price
            }
        }
    })

    const findlData = data.filter((item: any) => item !== undefined && item !== null)

    if (findlData === undefined || findlData === null || findlData.length === 0) {
        return Response.json({ error: 'موردی یافت نشد' }, { status: 404 })
    }

    return Response.json({ data: findlData }, { status: 200 })
}