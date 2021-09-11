import { combineReducers } from 'redux';

import cartReducer from './cartRedux/cart.reducer';
import productReducer from './productRedux/productReducer'

export default combineReducers({
    cart: cartReducer,
    product: productReducer
})
