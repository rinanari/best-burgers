import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import item from './slices/itemSlice';
export const store = configureStore({
  reducer: {
    filter,
    cart,
    item,
  },
});
