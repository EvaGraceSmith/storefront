import Categories from '../Categories/index';
import Products from '../Products/';
import ActiveCategory from '../ActiveCategory/';
import SimpleCart from '../SimpleCart/';

export default function Storefront() {
  return (
    <div>
      <Categories />
      <SimpleCart/>
      <ActiveCategory />
      <Products />
    </div>
  );
}