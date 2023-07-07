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
    { id: 1, name: 'category1', displayName: 'Category 1', description: 'Description 1' },
    { id: 2, name: 'category2', displayName: 'Category 2', description: 'Description 2' },
    { id: 3, name: 'category3', displayName: 'Category 3', description: 'Description 3' },
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
