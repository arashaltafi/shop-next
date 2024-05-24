const convertPrice = (price: number) => {
    return price.toLocaleString('fa-IR')
    // return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const convertPriceAll = (price: number, quantity: number) => {
    const totalPrice = quantity * price
    return totalPrice.toLocaleString('fa-IR')
}

const addProductToStorage = (targetId: number, isMinus: boolean = false) => {
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
            if (isMinus && basket[productIndex].quantity === 1) basket.splice(productIndex, 1) 
            else isMinus ? basket[productIndex].quantity-- : basket[productIndex].quantity++
        } else { // Product is not in the basket, add it
            basket.push({
                productId: targetId,
                quantity: 1
            })
        }

        localStorage.setItem(basketStorageKey, JSON.stringify(basket))
    }
}

const getProductStorageCount = (): number => {
    const basketStorageKey = process.env.BASKET_STORAGE || ''
    const basketStorage = localStorage.getItem(basketStorageKey)
    let storedCount = 0

    if (basketStorage === null || basketStorage === undefined) {
        return storedCount
    } else {
        JSON.parse(basketStorage).forEach((item: { quantity: number }) => {
            storedCount += item.quantity
        })
        return storedCount
    }
}

export {
    convertPrice,
    convertPriceAll,
    addProductToStorage,
    getProductStorageCount
}