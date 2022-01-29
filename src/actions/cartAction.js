import CartActionTypes from "../constants/cartTypes";
// import axois from 'axios'

export const toggleMenu = () => ({
    type: CartActionTypes.TOGGLE_MENU
})

export const addToCart = product => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: product
})

export const removeCart = product => ({
    type: CartActionTypes.REMOVE_CART,
    payload: product
})
