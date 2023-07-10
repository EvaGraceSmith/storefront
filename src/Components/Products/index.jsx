import { useSelector ,useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createSelector } from 'reselect';
import { add } from '../../store/actions';
import { getProducts } from '../../store/products';
import { useEffect } from 'react';
// Create a selector function using createSelector
const selectProductsByCategory = createSelector(
  state => state.products,
  state => state.categories.activeCategory,
  (products, selectedCategory) =>
    products.filter(product => product.category === selectedCategory)
);

export default function Products() {
   const selectedCategory = useSelector(state => state.categories.activeCategory);
  const {products} = useSelector(state => state.products);
// const products = useSelector(state => selectProductsByCategory(selectedProducts, selectedCategory));
//const products = selectedProducts.filter(product => product.category === selectedCategory)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [products]);
  //console.log('products', products);

    return (
        <div>
            <h2>Products</h2>
            { products.map((product, i) => {
                const url = 'https://source.unsplash.com/random?' + product.name
                return product.category === selectedCategory &&
                  product.inStock > 0 ? ( 
                <Card key={product._id}
                sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                          onClick={() => dispatch(add(product))}
                        size="small">ADD TO CART</Button>
                        <Button size="small">VIEW DETAILS</Button>
                    </CardActions>
                </Card>
                ) : (
                    ''
                  );
                })
            }

        </div>
    );
}


