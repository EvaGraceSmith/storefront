const initialState = [
    { id:1, name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { id:2, name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { id:3, name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { id:4, name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { id:5, name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { id:6, name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { id:7, name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ];
  
  const productsReducer = (state = initialState, action) => {
    // Handle other actions if needed
    return state;
  };
  
  export default productsReducer;
  