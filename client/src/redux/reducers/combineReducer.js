import { combineReducers } from "redux";
import { productReducer ,getProductDetailsReducer} from "./productReducer";

export const reducers = combineReducers({
  allproducts: productReducer,
  productDetails: getProductDetailsReducer
});
