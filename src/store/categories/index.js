import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit'


// Reducer
const initialState = {
  categories: [
    { id: 1, name: 'electronics', displayName: 'Electronics' },
    { id: 2, name: 'food', displayName: 'Food' },
    { id: 3, name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};



const GET = 'GET';

export const setCategories = createAction(GET);

let categories2 = [];

export const categories2Reducer = createReducer(
  categories2,
  {
    [GET]: (state, action) => {
      return action.payload
    }
  }
)

// ALSO need a function to handle the async (our data getter)
export const getCategories = () => async(dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log('initial data from getCategories', response.data.results);
  dispatch(setCategories(response.data.results));
}