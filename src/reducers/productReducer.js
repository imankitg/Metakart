import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_DETAILS } from "../actions/constants";

const initialState = {
    products: [],
    product: {}
};

export function productsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_LOADING:
            return {
                loading: true,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        default:
            return state;
    }
}

export function productDetailRed (state = {}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_LOADING:
            return {
                loading: true,
            }
        case FETCH_PRODUCT_DETAILS:
            return {
                loading: false,
                productDet: action.payload
            }
        default:
            return state;
    }
}




