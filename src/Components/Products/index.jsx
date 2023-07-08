import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createSelector } from 'reselect';

// Create a selector function using createSelector
const selectProductsByCategory = createSelector(
  state => state.products,
  state => state.categories.activeCategory,
  (products, selectedCategory) =>
    products.filter(product => product.category === selectedCategory)
);

export default function Products() {
  const selectedCategory = useSelector(state => state.categories.activeCategory);
  const products = useSelector(state => selectProductsByCategory(state, selectedCategory));


    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <Card key={product.id}
                sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={product.url}
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
                        <Button size="small">ADD TO CART</Button>
                        <Button size="small">VIEW DETAILS</Button>
                    </CardActions>
                </Card>
            ))}

        </div>
    );
}


