import { FETCH_PRODUCTS } from "../actions/constants";

const initialState = {
    products: [],
    product: {}
};

export function productsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state
            }
        default:
            return state;
    }
}

export function productRed (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state
            }
        default:
            return state;
    }

}

