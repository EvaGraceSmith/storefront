// Action Types
const SELECT_CATEGORY = 'SELECT_CATEGORY';

// Action Creators
export const selectCategory = (categoryId) => ({
  type: SELECT_CATEGORY,
  payload: categoryId,
});

// Reducer
const initialState = {
  categories: [
    { id: 1, name: 'electronics', displayName: 'Electronics' },
    { id: 2, name: 'food', displayName: 'Food' },
    { id: 3, name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
