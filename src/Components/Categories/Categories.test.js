import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Categories from '../Components/Categories';
import { selectCategory } from '../store/categories';

const mockStore = configureStore([]);

describe('Categories Component', () => {
  test('renders Categories component and displays available product categories', () => {
    const store = mockStore({
      categories: {
        categories: [
          { id: 1, name: 'electronics', displayName: 'Electronics' },
          { id: 2, name: 'food', displayName: 'Food' },
          { id: 3, name: 'clothing', displayName: 'Clothing' },
        ],
        activeCategory: null,
      },
    });

    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    // Verify that the component renders correctly
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'electronics' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'food' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'clothing' })).toBeInTheDocument();
  });

  test('selects a category and dispatches selectCategory action', () => {
    const store = mockStore({
      categories: {
        categories: [
          { id: 1, name: 'electronics', displayName: 'Electronics' },
          { id: 2, name: 'food', displayName: 'Food' },
          { id: 3, name: 'clothing', displayName: 'Clothing' },
        ],
        activeCategory: null,
      },
    });

    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    // Select a category
    fireEvent.click(screen.getByRole('button', { name: 'electronics' }));

    // Verify that selectCategory action was dispatched with the correct categoryId
    expect(store.getActions()).toContainEqual(selectCategory('electronics'));
  });
});
