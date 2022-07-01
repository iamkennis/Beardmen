import {
	SIGN_UP_LOADING,
	SIGN_IN_LOADING,
	SIGN_OUT_SUCCESS,
	SIGN_IN_SUCCESS,
	SIGN_UP_SUCCESS,
	SIGN_IN_ERROR,
	SIGN_UP_ERROR,
} from '../constants';

const INITIAL_STATE = {
    users: null,
    user: { userDetails: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null},
    error: null,
    token: null,
    isAuthenticated: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
			case SIGN_UP_LOADING:
			case SIGN_IN_LOADING:
				return {
					...state,
					loading: true,
					user: null,
					token: null,
					error: null,
					userDetails: null,
				};
			case SIGN_UP_SUCCESS:
			case SIGN_IN_SUCCESS:
				localStorage.setItem('token', action.payload.token);
				return {
					...state,
					loading: false,
					users: action.payload.data.user,
					userDetails: action.payload.data.user,
					error: null,
					token: action.payload.token,
				};
			case SIGN_UP_ERROR:
			case SIGN_IN_ERROR:
				return {
					...state,
					loading: false,
					products: null,
					error: action.payload,
					token: null,
				};

			case SIGN_OUT_SUCCESS:
				return {};
			default:
				return state;
		}
}

export default userReducer