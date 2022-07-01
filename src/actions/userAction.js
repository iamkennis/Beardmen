import {
	SIGN_IN_LOADING,
	SIGN_IN_SUCCESS,
	SIGN_IN_ERROR,
	SIGN_OUT_SUCCESS,
	SIGN_UP_LOADING,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR
} from '../constants';
import axios from 'axios';
import toast from 'react-hot-toast'

export const signInUser = (email, password) => async (dispatch) => {
	dispatch({
		type: SIGN_IN_LOADING,
	})
	try {
		const { data, status, message } = await axios.post(
			'https://beardmen-store-api.herokuapp.com/api/users/login',
			{ email, password }
		);

	if (status) {
			dispatch({
				type: SIGN_IN_SUCCESS,
				payload: data,
			});
       

		toast.success('Successfully Signed in!');
	} else {
		dispatch({
			type: SIGN_IN_ERROR,
			payload: message ? message : 'COULD NOT CONNECT',
		});
	}
		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: SIGN_IN_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		toast.error(error?.response?.data?.message);
	}
};

export const signUpUser =
	(name, lastName, email, password) => async (dispatch) => {
			dispatch({
				type: SIGN_UP_LOADING,
			});
		try {
			const { data } = await axios.post(
				'https://beardmen-store-api.herokuapp.com/api/users/signup',
				{
					name,
					lastName,
					email,
					password,
				}
			);

			dispatch({
				type: SIGN_UP_SUCCESS,
				payload: data,
			});
			localStorage.setItem('userDetails', JSON.stringify(data));
				toast.success('Successfully created!');
		} catch (error) {
			dispatch({
				type: SIGN_UP_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
			toast.error(error?.response?.data?.message);
		}
	};

export const signOutUser = () => async (dispatch) => {
	localStorage.removeItem('user');
	localStorage.removeItem('cart');

	dispatch({ type: SIGN_OUT_SUCCESS });
	toast.success("Logged out successfully");
};
