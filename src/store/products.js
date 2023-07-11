const initialState = {
  products:[
  //   { id:1, name: 'TV', category: 'electronics', price: 699.00, inStock: 5, description: 'A panel with pixels', url: 'https://source.unsplash.com/random?tv' },
  //   { id:2, name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, description: 'Listen to the news', url: 'https://source.unsplash.com/random?radio' },
  //   { id:3, name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, description: 'A nice shirt', url: 'https://source.unsplash.com/random?shirt' },
  //   { id:4, name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, description: 'A pair of socks', url: 'https://source.unsplash.com/random?socks' },
  //   { id:5, name: 'Apples', category: 'food', price: .99, inStock: 500, description: 'An apple a day keeps the doctor away!', url: 'https://source.unsplash.com/random?apples' },
  //   { id:6, name: 'Eggs', category: 'food', price: 1.99, inStock: 12, description: 'Eggs are a great source of protein', url: 'https://source.unsplash.com/random?eggs' },
  //   { id:7, name: 'Bread', category: 'food', price: 2.39, inStock: 90, description: 'A loaf of bread', url: 'https://source.unsplash.com/random?bread' },
], };
  

  // function productsReducer(state = initialState, action) {
  //   switch (action.type) {
  //     case 'SET':
  //       return {
  //         products: initialState.products.filter(product => product.category === action.payload.name)
  //       };
  //     default:
  //       return state;
  //   }
  // }
  
  
import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit'
import { SET} from './constants'

export const setProducts = createAction(SET);

export const productsReducer = createReducer(
  initialState,
  {
    [SET]: (state, action) => {
      return{
        ...state, 
        products: action.payload,
      };
    },
  },
)

// ALSO need a function to handle the async (our data getter)
export const getProducts = () => async(dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  //console.log('initial data from getProducts', response.data.results);
  dispatch(setProducts(response.data.results));
}