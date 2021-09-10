import axios from 'axios'
import ProductActionTypes from "./productTypes";

export const getProducts = () => dispatch => {
    axios.get('/api/products')
        .then(res => dispatch({
            type: ProductActionTypes.GET_PRODUCT,
            payload: res.data
        }))
       .catch(err => dispatch((err.res.data, err.res.status)))
}

export const addProducts = (product) => dispatch => {
    axios.post('api/products', product)
        .then(res => dispatch({
            type: ProductActionTypes.ADD_PRODUCT,
            payload: res.data
        }))
    .catch(err => dispatch((err.res.data, err.res.status)))
}

export const updateProduct = (id, product) => dispatch => {
    axios.patch(`api/products/${ id }`, product)
        .then(res => dispatch({
            type: ProductActionTypes.UPDATE_PRODUCT,
            payload: Promise.all([id, res.data.data])
        }))
    .catch(err => dispatch((err.res.data, err.res.status)))
}

export const deleteProduct = (id) => dispatch => {
    axios.delete(`/api/products/${ id }`)
        .then(res => dispatch({
            type: ProductActionTypes.REMOVE_PRODUCT,
            payload: id
        }))
    .catch(err => dispatch((err.res.data, err.res.status)))
}