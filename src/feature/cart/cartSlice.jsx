import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../data";

const initialState = {
  cart: cartData,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (initialState) => {
      initialState.cart = [];
      initialState.amount = 0;
      initialState.total = 0;
    },

    removeItem: (initialState, action) => {
      const itemId = action.payload;
      return {
        ...initialState,
        amount: initialState.cart.length-1,
        cart: initialState.cart.filter(
          (cartItem) => cartItem.id !== itemId
        ),
      };
    },

    increment: (initialState, { payload }) => {
      let tempCart = initialState.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          };
        }
        return cartItem;
      });
      return {
        ...initialState,
        amount: initialState.amount + 1,
        cart: tempCart,
      };
    },

    decrement: (initialState, { payload }) => {
      let tempCart = initialState.cart
        .map((cartItem) => {
          if (cartItem.id === payload) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
              
            };
          }
          return cartItem;
        })
        .filter((el) => el.amount !== 0);
      return {
        ...initialState,
        amount: initialState.amount - 1,
        cart: tempCart,
      };
    },

    calculate:(initialState)=>{
      let amount = 0;
      let total = 0;
      initialState.cart.forEach((item) => {
        amount += item.amount;
      });
      initialState.cart.forEach((item) => {
        total += item.amount * item.price;
      });
      return {...initialState,total:total.toFixed(2),amount};
    }
  },
});

export const {
  clearCart,
  removeItem,
  increment,
  decrement,
  calculate,
} = cartSlice.actions;

export default cartSlice.reducer;
