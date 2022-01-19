import { axiosInstance } from '../config';
import ProductActionTypes from '../constants/productTypes';

export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await axiosInstance.get('/api/products');
		dispatch({
			type: ProductActionTypes.GET_PRODUCT,
			payload: data.data.products,
		});
	} catch (error) {
		dispatch({
			type: ProductActionTypes.FETCH_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const addProducts = (product) => async (dispatch) => {
	try {
		const { data } = await axiosInstance.get('/api/products', product);
		dispatch({
			type: ProductActionTypes.ADD_PRODUCT,
			payload: {
				product: data._id,
				name: data.name,
				image: data.image,
				price: data.price,
			},
		});
	} catch (error) {
		dispatch({
			type: ProductActionTypes.FETCH_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
	// axios.post('/', product)
	//     .then(res => dispatch({
	//         type: ProductActionTypes.ADD_PRODUCT,
	//         payload: product
	//     }))
	// .catch(err => dispatch((err.res.data, err.res.status)))
};

export const updateProduct = (id, product) => (dispatch) => {
	axiosInstance
		.patch(`/${id}`, product)
		.then((res) =>
			dispatch({
				type: ProductActionTypes.UPDATE_PRODUCT,
				payload: Promise.all([id, res.data]),
			})
		)
		.catch((err) => dispatch((err.res.data, err.res.status)));
};

export const deleteProduct = (id) => (dispatch) => {
	axiosInstance
		.delete(`/${id}`)
		.then((res) =>
			dispatch({
				type: ProductActionTypes.REMOVE_PRODUCT,
				payload: id,
			})
		)
		.catch((err) => dispatch((err.res.data, err.res.status)));
};
