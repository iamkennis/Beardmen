import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/';

import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productReducer'
import userReducer from '../reducers/userReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','cart']
}


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    user : userReducer
})

export default persistReducer(persistConfig, rootReducer);
