import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/categories';

const Categories = () => {
  const {categories} = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryId) => {
    console.log('handleCategoryClick', categoryId);
    dispatch(selectCategory(categoryId));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category.name)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
