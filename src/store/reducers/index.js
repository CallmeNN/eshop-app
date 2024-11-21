import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import { combineReducers } from "redux";
import FilterReducer from "./FilterReducer";

export default combineReducers({
    products: ProductReducer,
    cart: CartReducer,
    filters: FilterReducer
})