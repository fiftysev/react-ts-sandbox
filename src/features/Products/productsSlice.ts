import { createSlice } from '@reduxjs/toolkit';
import { remove } from 'lodash';

import { IProduct } from 'interfaces/IProduct';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductsState {
  items: IProduct[];
}

const initialState: ProductsState = {
  items: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string | number>) => {
      remove(state.items, (v) => v.id === action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
