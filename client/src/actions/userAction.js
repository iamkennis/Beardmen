import userActionType from '../constants/userType';
import axios from 'axios';

export const signInUser = (email, password) => async (dispatch) => {
	try {
		const { data } = await axios.post(
			'https://beardmen-store-api.herokuapp.com/api/users/login',
			{ email, password }
		);

		dispatch({
			type: userActionType.SIGN_IN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userDetails', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: userActionType.SIGN_IN_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signUpUser =
	(name, lastName, email, password) => async (dispatch) => {
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
				type: userActionType.SIGN_UP_SUCCESS,
				payload: data,
			});
			localStorage.setItem('userDetails', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: userActionType.SIGN_UP_ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const signOutUser = () => async (dispatch) => {
	localStorage.removeItem('user');
	localStorage.removeItem('cart');

	dispatch({ type: userActionType.SIGN_OUT_SUCCESS });
};
