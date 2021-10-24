import userActionType from "../constants/userType";

const INITIAL_STATE = {
    users: null,
    message: '',
    token: localStorage.getItem('token'),
    isAuthenticated: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case userActionType.SIGN_UP_SUCCESS:
        case userActionType.SIGN_UP_ERROR:
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                users: action.payload,
                message: action.payload,
                isAuthenticated: true
            }
        case userActionType.SIGN_IN_SUCCESS:
        case userActionType.SIGN_IN_ERROR:
        localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                users: action.payload,
                message: action.payload,
                isAuthenticated: true
            }
        default:
            return state
    }
}

export default userReducer