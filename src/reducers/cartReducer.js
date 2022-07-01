import { ADD_TO_CART, REMOVE_CART, CLEAR_CART } from '../constants';
import { addProductToCart, removeCartProduct } from '../Utils/cartUtils';

const INITIAL_STATE = {
	cartProducts: [],
	hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART:
		// case CartActionTypes.FETCH_CART_ERROR:
			return {
				...state,
				cartProducts: addProductToCart(state.cartProducts, action.payload),
			};

		case REMOVE_CART:
			return {
				...state,
				cartProducts: removeCartProduct(state.cartProducts, action.payload),
			};
		case CLEAR_CART:
			return {
				...state,
				cartProducts: state.cartProducts.filter(
					(cartProduct) => cartProduct._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
