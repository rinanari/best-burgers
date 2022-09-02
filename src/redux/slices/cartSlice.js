import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        if (findItem.count > 0) {
          findItem.count--;
          state.totalPrice -= findItem.price;
        }
        if (findItem.count < 0) {
          state.items = state.items.filter((item) => item.id !== action.payload);
          state.totalPrice = 0;
        }
      }
    },
    removeItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);
      let price = findItem.price * findItem.count;
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice -= price;
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
