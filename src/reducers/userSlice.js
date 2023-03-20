import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import toast from 'react-hot-toast'
import api from '../utils/api.js'

const initialState = {
  users: { userDetails: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null},
  token: null,
  error: null
}


export const signUpUser = createAsyncThunk("user/signup", async ({name, lastName, email, password}) => {
  // const response = await fetch("https://beardmen-store-api.herokuapp.com/api/products")
  try {
    const res = await api.post(
      '/users/signup',
      {
        name,
        lastName,
        email,
        password,
      }
    );
  console.log(res.data)
      toast.success('Successfully Signed up!');
      localStorage.setItem('userDetails', JSON.stringify(res.data));
      return res.data
} catch (error) {
  toast.error(error?.response?.data?.message);
  // console.log(error?.response)
}});




export const signInUser = createAsyncThunk("users/signin", async ({email,password}) => {
  // const response = await fetch("https://beardmen-store-api.herokuapp.com/api/products")
  try {
    const res = await api.post(
      '/users/login',{email,password});
  // console.log(res)
      toast.success('Successfully Signed in!');
      // localStorage.setItem('userDetails', JSON.stringify(res.data));
     return res.data
} catch (error) {
  toast.error(error?.response?.data?.message);
  // console.log(error?.response)
}

})

const userSlice = createSlice({
name: 'users',
initialState,
reducers: { 
   signOutUser: (state) => {
  state.users = localStorage.removeItem('userDetails');
  state.token = null;
   }
},

extraReducers: {
  [signUpUser.fulfilled]: (state,action) => {
     state.loading = false
     state.users = action.payload
  state.userDetails = action.payload
  state.token = action.payload
  },
  [signUpUser.rejected]: (state,action) => {
    state.loading = false
    state.error = action.payload
 },
 [signInUser.fulfilled]: (state,action) => {
  state.loading = false
  state.users = action.payload
  state.userDetails = action.payload
  state.token = action.payload
},
}
})

  export const {signOutUser} = userSlice.actions

  export default userSlice.reducer