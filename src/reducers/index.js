import { combineReducers } from "redux";
import { productDetailRed, productsReducer } from "./productReducer";


// export default combineReducers({
//     fetch_products: productsReducer,
//     productDet: productDetailRed,
// });

const rootReducer = combineReducers({
    fetch_products: productsReducer,
    product_Det: productDetailRed,
});

export default rootReducer;
