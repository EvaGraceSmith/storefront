import { useSelector } from 'react-redux';

function ActiveCategory() {
    const selectedCategory = useSelector(state => state.categories.activeCategory);

  return (
    <>
      <h2>{selectedCategory}</h2>
    </>
  )
}

export default ActiveCategory
