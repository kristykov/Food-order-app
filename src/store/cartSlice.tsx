import { createSlice } from "@reduxjs/toolkit";

export interface IAddedItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as IAddedItem[],
    totalQuantity: 0,
    totalSum: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      state.totalQuantity += 1;
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        // state.totalSum += existingItem.totalPrice;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
        // state.totalSum += newItem.price;
      }
      state.totalSum += newItem.price;
    },
    removeItemFromCart(state, action) {
      const newItemId = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === newItemId;
      });
      if (!existingItem) {
        return;
      }
      if (state.totalQuantity === 0) {
        return;
      }
      state.totalQuantity -= 1;
      state.totalSum -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== newItemId;
        });
      } else if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
