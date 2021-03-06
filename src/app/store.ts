import { configureStore } from '@reduxjs/toolkit';
import cartItemsSlice from '../components/products/CartItemsSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
