import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist'
import rootReducer from './rootReducer'

const middleware = [thunk,logger]


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store);
