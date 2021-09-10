export const addProductToCart = (cartProducts, cartProductToAdd) => {
    const prevCartProduct = cartProducts.find(cartProduct =>
        cartProduct._id === cartProductToAdd._id);
    
    if (prevCartProduct){
        return cartProducts.map(cartProduct => cartProduct.id === cartProductToAdd.id
            ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)
    }
                                                                       
    return [ ...cartProducts, {...cartProductToAdd, quantity: 1}]
}


export const removeProduct = (cartProducts, cartProductToRemove) => {
    const existingCartProduct = cartProducts.find(cartProduct => cartProduct.id === cartProductToRemove.id)

    if (existingCartProduct.quantity === 1)
    {
        return cartProducts.filter(cartProduct => cartProduct.id  !== cartProductToRemove.id)
    }

    return cartProducts.map(cartProduct => cartProduct.id === cartProductToRemove.id
        ? { ...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct )
}