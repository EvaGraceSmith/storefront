const initialState = [
    { id: 1, name: 'Product 1', categoryId: 'category1', description: 'Description 1', price: 10, inventoryCount: 5 },
    { id: 2, name: 'Product 2', categoryId: 'category1', description: 'Description 2', price: 15, inventoryCount: 10 },
    { id: 3, name: 'Product 3', categoryId: 'category2', description: 'Description 3', price: 20, inventoryCount: 8 },
    { id: 4, name: 'Product 4', categoryId: 'category3', description: 'Description 4', price: 25, inventoryCount: 3 },
  ];
  
  const productsReducer = (state = initialState, action) => {
    // Handle other actions if needed
    return state;
  };
  
  export default productsReducer;
  