import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
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
  cart: cartReducer,
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
