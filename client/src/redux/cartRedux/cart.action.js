import CartActionTypes from "./cart.types";

export const toggleMenu = () => ({
    type: CartActionTypes.TOGGLE_MENU
})

export const addProduct = product => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product
})

export const removeItem = product => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: product
})