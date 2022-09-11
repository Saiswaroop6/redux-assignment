import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from ".";

export default configureStore(
 {reducer:rootReducers},applyMiddleware(thunk)
);
