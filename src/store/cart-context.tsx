import React from "react";

interface IAddedItem {
  id: string;
  name: string;
  amount: number;
  price: string;
}

// interface ICartState {
//   items: IAddedItem[];
//   totalAmount: number;
//   addItem: (item: IAddedItem) => {};
//   removeItem: (id: string) => {};
// }

const CartContext = React.createContext({
  items: [] as IAddedItem[],
  totalAmount: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: (item: IAddedItem) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: (id: string) => {},
});

export default CartContext;
