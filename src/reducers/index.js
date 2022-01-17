import { combineReducers } from "redux";
import { productDetailRed, productsReducer } from "./productReducer";


// export default combineReducers({
//     fetch_products: productsReducer,
    
// });

const rootReducer = combineReducers({
    fetch_products: productsReducer,
    productDet: productDetailRed,
});

export default rootReducer;
