import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/categories';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

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

      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
      {categories.map((category) => (
        <Button
        key={category.id}
        onClick={() => handleCategoryClick(category.name)}
        >{category.name}</Button>
                ))}
      </ButtonGroup>
    </Box>

    </div>
  );
};

export default Categories;
