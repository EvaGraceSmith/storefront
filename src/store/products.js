const initialState = [
    { id:1, name: 'TV', category: 'electronics', price: 699.00, inStock: 5, description: 'A panel with pixels', url: 'https://source.unsplash.com/random?tv' },
    { id:2, name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, description: 'Listen to the news', url: 'https://source.unsplash.com/random?radio' },
    { id:3, name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, description: 'A nice blue shirt', url: 'https://source.unsplash.com/random?shirt' },
    { id:4, name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, description: 'A pair of socks', url: 'https://source.unsplash.com/random?socks' },
    { id:5, name: 'Apples', category: 'food', price: .99, inStock: 500, description: 'A bag of 10 apples', url: 'https://source.unsplash.com/random?apples' },
    { id:6, name: 'Eggs', category: 'food', price: 1.99, inStock: 12, description: 'A dozen eggs', url: 'https://source.unsplash.com/random?eggs' },
    { id:7, name: 'Bread', category: 'food', price: 2.39, inStock: 90, description: 'A loaf of bread', url: 'https://source.unsplash.com/random?bread' },
  ];
  
  const productsReducer = (state = initialState, action) => {
    // Handle other actions if needed
    return state;
  };
  
  export default productsReducer;
  