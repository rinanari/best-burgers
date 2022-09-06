import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('item/fetchItemsStatus', async (params) => {
  const { order, sortBy, category } = params;
  const { data } = await axios.get(
    `https://630600ae697408f7edd06da7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
