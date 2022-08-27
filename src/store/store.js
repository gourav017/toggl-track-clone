import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./productreducer/products.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
