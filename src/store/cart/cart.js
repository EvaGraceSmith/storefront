import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action) => {
    let matchFound = false;
    let newstate = state.filter(product => {
      console.log(product);
      if (!matchFound && product.name === action.payload.name){
        matchFound = true;
        return false;
      }
      return true;
    })
    return newstate;
  },
}});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

