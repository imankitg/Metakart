import { combineReducers } from "redux";
import { productsReducer, productRed } from "./productReducer";


export default combineReducers({
    posts: productsReducer,
    any: productRed
});