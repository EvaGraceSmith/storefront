import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Products from '../Components/Products';

const mockStore = configureStore([]);

describe('Products Component', () => {
  test('renders Products component and displays product details', () => {
    const store = mockStore({
      categories: {
        activeCategory: 'electronics',
      },
      products: [
        {
          id: 1,
          name: 'TV',
          category: 'electronics',
          price: 699.0,
          inStock: 5,
          description: 'A panel with pixels',
          url: 'https://source.unsplash.com/random?tv',
        },
      ],
    });

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // Verify that the component renders correctly
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('TV')).toBeInTheDocument();
    expect(screen.getByText('A panel with pixels')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ADD TO CART' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'VIEW DETAILS' })).toBeInTheDocument();
  });
});
