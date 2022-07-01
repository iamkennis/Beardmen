import { GET_PRODUCT_LOADING } from '../constants';

const INITIAL_STATE = {
    products: [],
    error : false
}


const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        
        case GET_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
                products: null,
                error: null
            }
        case 'GET_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            }
        case 'GET_PRODUCT_ERROR':
            return {
                ...state,
                loading: false,
                products: null,
                error: action.payload
            }
        // case ProductActionTypes.ADD_PRODUCT:
        //     return {
        //         ...state,
        //         products: [action.payload, ...state.products]
        //     }
        // case ProductActionTypes.UPDATE_PRODUCT:
        //     const {id, data} = action.payload
        //     return {
        //         ...state,
        //         products: state.products.map(product => product._id === id ? product = data : null)
        //     }
        // case ProductActionTypes.REMOVE_PRODUCT:
        //     return {
        //         ...state,
        //         products: state.products.filter(product => product.id !== action.payload)
        //     }
        default:
            return state
    }
    
}

export default productReducer