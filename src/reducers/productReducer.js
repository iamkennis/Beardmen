import ProductActionTypes from "../constants/productTypes";

const INITIAL_STATE = {
    products: [],
    error : null
}


const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        
        case ProductActionTypes.GET_PRODUCT:
        case ProductActionTypes.FETCH_SUCCESS:
        case ProductActionTypes.FETCH_ERROR:
            return {
                ...state,
                products: action.payload,
                error: action.payload
            }
        case ProductActionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case ProductActionTypes.UPDATE_PRODUCT:
            const {id, data} = action.payload
            return {
                ...state,
                products: state.products.map(product => product._id === id ? product = data : null)
            }
        case ProductActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
    
}

export default productReducer