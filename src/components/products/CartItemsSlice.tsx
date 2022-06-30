import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInStorage } from '../products/productType';

export type CartItems = {
  cartItemsCount: string | null;
};

const cartItemsCount = JSON.parse(localStorage.getItem('cartItems') || '[]') as ProductInStorage[];

const initialState = {
  cartItemsCount: (cartItemsCount.length > 0) ? `${cartItemsCount.reduce((sum, current) => sum + current.quantity, 0)}` : 0,
} as CartItems;

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<number | null>) => {
      if (action.payload) {
        const storedItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as ProductInStorage[];
        const count = (storedItems.length > 0) ? storedItems.reduce((sum, current) => sum + current.quantity, 0) : 0;
        return ({ cartItemsCount: `${count + action.payload}` });
      }
      return;
    },
  },
});

export const { setCartCount } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
