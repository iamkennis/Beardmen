import CartActionTypes from './cart.types'
import { addProductToCart, removeProduct } from './cart.utils';

const INITIAL_STATE = {
    cartProducts: [],
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
         case CartActionTypes.TOGGLE_MENU:
            return {
                ...state, 
                hidden: !state.hidden
            }
        
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...state,
                cartProducts: addProductToCart(state.cartProducts,action.payload)
            };
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                cartProducts: removeProduct(state.cartProducts, action.payload)
            }
    default:
    return state;
    }

}

export default cartReducer;