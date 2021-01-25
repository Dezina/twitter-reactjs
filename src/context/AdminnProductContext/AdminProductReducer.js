import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    REMOVE_PRODUCT,
    PRODUCT_ERROR
} from '../types'



export default (state, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...state.products, payload],
                error: null
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, payload]
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== payload)
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product._id === payload._id ? payload : product)
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                error: payload,
            }
        default:
            return state
    }
}