import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit'
import {GET, SELECT} from '../constants'


// Reducer
const initialState = {
  categories: [
  //   { id: 1, name: 'electronics', displayName: 'Electronics' },
  //   { id: 2, name: 'food', displayName: 'Food' },
  //   { id: 3, name: 'clothing', displayName: 'Clothing' },
   ],
  activeCategory: null,
};

export const setCategories = createAction(GET);

export const categoriesReducer = createReducer(
  initialState,
  {
    [GET]: (state, action) => {
      return{...state, categories: action.payload }
    },
    [SELECT]: (state, action) => {
      return { ...state, activeCategory: action.payload };
    }
  },
)

// ALSO need a function to handle the async (our data getter)
export const getCategories = () => async(dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
 // console.log('initial data from getCategories', response.data.results);
  dispatch(setCategories(response.data.results));
}