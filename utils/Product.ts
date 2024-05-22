const convertPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const addProductToStorage = (targetId: number) => {
    const basketStorageKey = process.env.BASKET_STORAGE || ''
    const basketStorage = localStorage.getItem(basketStorageKey)

    if (basketStorage === null || basketStorage === undefined) { // Add first item to the basket
        localStorage.setItem(basketStorageKey, JSON.stringify([{
            productId: targetId,
            quantity: 1
        }]))
    } else {
        const basket = JSON.parse(basketStorage)
        const productIndex = basket.findIndex((item: { productId: number }) => item.productId === targetId)

        if (productIndex !== -1) { // Product is already in the basket, update its quantity
            basket[productIndex].quantity++
        } else { // Product is not in the basket, add it
            basket.push({
                productId: targetId,
                quantity: 1
            })
        }

        localStorage.setItem(basketStorageKey, JSON.stringify(basket))
    }
}

export {
    convertPrice,
    addProductToStorage
}