import userActionType from "../constants/userType";

const INITIAL_STATE = {
    users: null,
    user: { userDetails: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null},
    error: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case userActionType.SIGN_UP_SUCCESS:
        
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                users: action.payload,
                userDetails: action.payload.user,
                isAuthenticated: true
            }
        case userActionType.SIGN_UP_ERROR:
               return {
                error: action.payload
            }
        case userActionType.SIGN_IN_SUCCESS:
        localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                users: action.payload,
                userDetails: action.payload.data.user,
                isAuthenticated: true
            }
        case userActionType.SIGN_IN_ERROR:
            return {
                error: action.payload
            }
        case userActionType.SIGN_OUT_SUCCESS:
            return {}
        default:
            return state
    }
}

export default userReducer