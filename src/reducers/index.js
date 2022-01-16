import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";


// export default combineReducers({
//     fetch_products: productsReducer,
    
// });

const rootReducer = combineReducers({
    fetch_products: productsReducer,
});

export default rootReducer;
