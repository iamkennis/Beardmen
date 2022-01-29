import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import session from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage/session';

import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productReducer'
import userReducer from '../reducers/userReducer';

const persistConfig = {
    key: 'root',
    storage,                                                                               
    whitelist: [ 'cart','user']
}


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    user : userReducer
})

export default persistReducer(persistConfig, rootReducer);
