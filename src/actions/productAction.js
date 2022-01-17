import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_DETAILS } from "./constants";
import data from "../data";


export const getAllProducts = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data,
    })
}

export const getProductDetails = (productId) => dispatch => {
    dispatch({
        type: FETCH_PRODUCT_DETAILS,
        payload: data,
    })
}







