import axios from 'axios'
import ProductActionTypes from "./productTypes";



export async function getProducts( dispatch){
    await axios.get('/')
    .then(res => dispatch({
            type: ProductActionTypes.GET_PRODUCT,
            payload: res.data.products
    }))
        
        .catch(err => dispatch((err.res.data, err.res.status)))
       
}

export const addProducts = (product) => dispatch => {
    axios.post('/', product)
        .then(data => dispatch({
            type: ProductActionTypes.ADD_PRODUCT,
            payload: data
        }))
    .catch(err => dispatch((err.res.data, err.res.status)))
}

export const updateProduct = (id, product) => dispatch => {
    axios.patch(`/${ id }`, product)
        .then(res => dispatch({
            type: ProductActionTypes.UPDATE_PRODUCT,
            payload: Promise.all([id, res.data])
        }))
    .catch(err => dispatch((err.res.data, err.res.status)))
}

export const deleteProduct = (id) => dispatch => {
    axios.delete(`/${ id }`)
        .then(res => dispatch({
            type: ProductActionTypes.REMOVE_PRODUCT,
            payload: id
        }))
    .catch(err => dispatch((err.res.data, err.res.status)))
}