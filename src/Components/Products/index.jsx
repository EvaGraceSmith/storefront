import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { When } from 'react-if';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addToCart } from '../../store/cart/cart';
import { decrementInventoryOnAdd, getProducts } from '../../store/products/products';
import { Link } from 'react-router-dom';

export default function Products() {
        const { activeCategory } = useSelector((state) => state.categories);
        const  products = useSelector((state) => state.products);
        //  console.log('this is products.....', products)
        const dispatch = useDispatch();
      
        const addDispatcher = (product) => {
          dispatch(addToCart(product));
          dispatch(decrementInventoryOnAdd(product));
        };
      
        useEffect(() => {
          dispatch(getProducts(activeCategory))
        }, [activeCategory]);
      
    return (
        <div>
            
      <When condition={activeCategory}>
            <h2>Products</h2>
            <Grid container spacing={2} width="80%" margin="auto">
          {
            products.map((product, index) => (
              <Grid key={`products${index}`} item xs={12} md={6} lg={4} >
           
                <Card key={product._id}
                sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`https://source.unsplash.com/random?${product.name}`}
                        title={product.name}
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
                          onClick={() => addDispatcher(product)}
                        size="small">ADD TO CART</Button>
                        <Button size="small"
                        
                        component={Link}
                        to={`product/${product._id}`}
                        >VIEW DETAILS</Button>
                    </CardActions>
                </Card>
                </Grid>
            ))
            }
            </Grid>
            </When>
        </div>
    );
}