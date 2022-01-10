import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "./constants";
import data from "../data";


export const getAllProducts = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data,
    })


}





