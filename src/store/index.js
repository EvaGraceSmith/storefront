
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import {categoriesReducer, categories2Reducer} from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const store = () => configureStore({
  reducer: {
  categories: categoriesReducer,
  categories2: categories2Reducer,
  products: productsReducer,
  cart: cartReducer,
  }
});

// const store = () => {
//     return createStore(rootReducer, composeWithDevTools());
// };

export default store ();
