import React, { useReducer } from "react";
import CartContext from "./cart-context";

interface ICartState {
  items: IAddedItem[];
  totalAmount: number;
}

interface IAction {
  type: string;
  item?: IAddedItem;
  id?: string;
}

interface IAddedItem {
  id: string;
  name: string;
  amount: number;
  price: string;
  image: string;
}

const defaultCartState = {
  items: [] as IAddedItem[],
  totalAmount: 0,
};

const cartReducer = (state: ICartState, action: IAction) => {
  if (action.type === "ADD_ITEM") {
    if (action.item) {
      const updatedTotalAmount =
        state.totalAmount + +action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item?.id;
      });
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = Math.abs(
      state.totalAmount - +existingCartItem.price,
    );
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// eslint-disable-next-line react/require-default-props
const CartProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );
  const addItemToCartHandler = (item: IAddedItem) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
