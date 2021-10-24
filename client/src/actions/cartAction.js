import CartActionTypes from "../constants/cartTypes";
// import axois from 'axios'

export const toggleMenu = () => ({
    type: CartActionTypes.TOGGLE_MENU
})

export const addToCart = product => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: product
})

export const removeCart = product => ({
    type: CartActionTypes.REMOVE_CART,
    payload: product
})

// export const getCart = (id) => async (dispatch) => {
//     try
//     {
//         const { data } = await axois.get(`/api/carts/${ id }`)
//         dispatch({
//             type: CartActionTypes.GET_CART,
//             payload: data.data.carts
//         })

//     } catch (error)
//     {
//       dispatch({
//           type: CartActionTypes.FETCH_CART_ERROR,
//           payload:
//             error.response && error.response.data.message
//               ? error.response.data.message
//               :
//               error.message,
//         });
//     }
// }
     

// export const addToCart = (id, product) => async (dispatch) => {
//     try
//     {
        
//         const { data } = axois.post(`/api/products/${id}/carts`,{product})
//         dispatch({
//             type: CartActionTypes.ADD_TO_CART,
//             payload: data
            
//         });

//     } catch (error)
//     {
//        dispatch({
//           type: CartActionTypes.FETCH_CART_ERROR,
//           payload:
//             error.response && error.response.data.message
//               ? error.response.data.message
//               :
//               error.message,
//         });
//     }
// }
