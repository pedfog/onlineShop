import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/productType';

export type CartItems = {
  cartItemsCount: string | null;
};

const initialState = {
  cartItemsCount: `${(JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[] | []).length}`,
} as CartItems;

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<string | null>) => {
      if (action.payload === 'add') {
        return ({ ...state, cartItemsCount: `${Number(state.cartItemsCount) + 1}` });
      }
      if (action.payload === 'delete') {
        return ({ ...state, cartItemsCount: `${Number(state.cartItemsCount) - 1}` });
      }
      return;
    },
  },
});

export const { setCartCount } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
