import axios from 'axios';
import {GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS,GET_PRODUCT_ERROR} from '../constants';

export const getProducts = () => async (dispatch) => {
	dispatch({
		type: GET_PRODUCT_LOADING,
	})
	try {
		const { data } = await axios.get(
			'https://beardmen-store-api.herokuapp.com/api/products'
		);
		dispatch({
			type: GET_PRODUCT_SUCCESS,
			payload: data.data.products,
		});
	} catch (error) {
		dispatch({
			type: GET_PRODUCT_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// export const addProducts = (product) => async (dispatch) => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://beardmen-store-api.herokuapp.com/api/products',
// 			product
// 		);
// 		dispatch({
// 			type: ProductActionTypes.ADD_PRODUCT,
// 			payload: {
// 				product: data._id,
// 				name: data.name,
// 				image: data.image,
// 				price: data.price,
// 			},
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: ProductActionTypes.FETCH_ERROR,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// 	// axios.post('/', product)
// 	//     .then(res => dispatch({
// 	//         type: ProductActionTypes.ADD_PRODUCT,
// 	//         payload: product
// 	//     }))
// 	// .catch(err => dispatch((err.res.data, err.res.status)))
// };

// export const updateProduct = (id, product) => (dispatch) => {
// 	axios
// 		.patch(`https://beardmen-store-api.herokuapp.com/${id}`, product)
// 		.then((res) =>
// 			dispatch({
// 				type: ProductActionTypes.UPDATE_PRODUCT,
// 				payload: Promise.all([id, res.data]),
// 			})
// 		)
// 		.catch((err) => dispatch((err.res.data, err.res.status)));
// };

// export const deleteProduct = (id) => (dispatch) => {
// 	axios
// 		.delete(`/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: ProductActionTypes.REMOVE_PRODUCT,
// 				payload: id,
// 			})
// 		)
// 		.catch((err) => dispatch((err.res.data, err.res.status)));
// };
