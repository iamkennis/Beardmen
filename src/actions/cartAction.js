import {ADD_TO_CART,REMOVE_CART} from "../constants";
// import axois from 'axios'

// export const toggleMenu = () => ({
//     type: CartActionTypes.TOGGLE_MENU
// })

export const addToCart = product => ({
    type: ADD_TO_CART,
    payload: product
})

export const removeCart = product => ({
    type: REMOVE_CART,
    payload: product
})
