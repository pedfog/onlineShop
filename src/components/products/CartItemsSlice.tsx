import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItems = {
  cartItemsCount: string | null;
};

const initialState = {
  cartItemsCount: '0',
} as CartItems;

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<string | null>) => {
      if (action.payload === 'add') {
        return ({ ...state, cartItemsCount: `${Number(state.cartItemsCount) + 1}` });
      }
      return;
    },
  },
});

export const { setCartCount } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
