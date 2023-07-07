import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productsReducer from './products';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = () => {
    return createStore(rootReducer, composeWithDevTools());
};

export default store ();
