import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  //   cart: cartReducer,
});

export default rootReducer;
