import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const selectedCategoryId = useSelector((state) => state.categories.selectedCategoryId);
  const products = useSelector((state) =>
    state.products.filter((product) => product.categoryId === selectedCategoryId)
  );

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
