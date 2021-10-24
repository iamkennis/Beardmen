import CartActionTypes from '../constants/cartTypes'
import {addProductToCart,removeCartProduct} from '../Utils/cartUtils'

const INITIAL_STATE = {
    cartProducts: [],
    hidden: true,
    message: ''
    
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
         case CartActionTypes.TOGGLE_MENU:
            return {
                ...state, 
                hidden: !state.hidden
            }
        
        case CartActionTypes.ADD_TO_CART:
        case CartActionTypes.FETCH_CART_ERROR:
            return {
                ...state,
                cartProducts: addProductToCart(state.cartProducts, action.payload),
                message: action.payload
            };
        
        case CartActionTypes.REMOVE_CART:
        // case CartActionTypes.FETCH_CART_ERROR:
            return {
                ...state,
                cartProducts: removeCartProduct(state.cartProducts, action.payload),
                // message: action.payload
            }
    default:
    return state;
    }

}

export default cartReducer;