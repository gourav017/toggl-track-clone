import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { productReducer } from "./productreducer/products.reducer";

const rootReducer = combineReducers({
    products:productReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))