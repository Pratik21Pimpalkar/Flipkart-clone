import { combineReducers } from "redux";
import { productReducer ,getProductDetailsReducer} from "./productReducer";
import { cartReducer } from "./cartReducer";

export const reducers = combineReducers({
  cart:cartReducer,
  allproducts: productReducer,
  productDetails: getProductDetailsReducer
});
