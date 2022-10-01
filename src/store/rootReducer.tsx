import { combineReducers } from "@reduxjs/toolkit";
// import authReducer from "./authSlice";
import cartReducer, { IAddedItem } from "./cartSlice";

interface ICartState {
  items: IAddedItem[];
  totalQuantity: number;
  totalSum: number;
}

export interface IRootState {
  cart: ICartState;
}

const rootReducer = combineReducers({
  // auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
