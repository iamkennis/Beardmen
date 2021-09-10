import { combineReducers } from 'redux';

import cartReducer from './cartRedux/cart.reducer';
import productsReducer from './productRedux/productReducer'

export default combineReducers({
    cart: cartReducer,
    product: productsReducer
})
