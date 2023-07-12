
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/index';
import productsReducer from './products/products';
import cartReducer from './cart/cart';

const store = () => configureStore({
  reducer: {
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  }
});



export default store ();
