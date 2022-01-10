import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "../actions/constants";

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





