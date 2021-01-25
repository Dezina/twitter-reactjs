import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import URL from '../config/ServerURL';
import AdminnProductContext from './AdminProductContext';
import AdminnProductReducer from './AdminProductReducer';
import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT,
    PRODUCT_ERROR
} from '../types'

//const CLIENDID = '5f310d306d2e894f504da86f'


const AdminnProductState = (props) => {

    const intialState = {
        products: [],
        error: null
    }

    const [state, dispatch] = useReducer(AdminnProductReducer, intialState)

    useEffect(() => {
        getProducts()
    }, [])

    // Get Products
    const getProducts = async () => {
        axios.get(`${URL}/products`)
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err.response)
                dispatch({
                    type: PRODUCT_ERROR,
                    payload: err.response
                })
            })
    }

    // Add Product
    const addProduct = async (product) => {
        axios({
            method: 'post',
            url: `${URL}/products/add`,
            headers: {},
            data: product
        }).then(res => {
            console.log(res.data)
            dispatch({
                type: ADD_PRODUCT,
                payload: product
            })
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            })
        })
    }

    // Update Product
    const updateProduct = async (product, id) => {
        console.log(product)
        axios({
            method: 'patch',
            url: `${URL}/products/update/${id}`,
            headers: {},
            data: product
        }).then(res => {
            console.log(res.data)
            dispatch({
                type: UPDATE_PRODUCT,
                payload: product
            })
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response
            })
        })
    }

    // Remove Product
    const removeProduct = async (id, productId) => {
        console.log(id)
        axios({
            method: 'delete',
            url: `${URL}/products/delete/${id}`,
            headers: {},
            data: {
                productId: productId
            }
        }).then(res => {
            console.log(res.data)
            dispatch({
                type: REMOVE_PRODUCT,
                payload: id
            })
        }).catch(err => {
            console.log(err.response)
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            })
        })
    }


    return (
        <AdminnProductContext.Provider value={{
            products: state.products,
            error: state.error,
            addProduct,
            removeProduct,
            updateProduct,
            getProducts
        }} >
            {props.children}
        </AdminnProductContext.Provider >
    )
}

export default AdminnProductState