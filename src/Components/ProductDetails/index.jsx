
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
// import { addDispatcher } from '../../store/cart/cart';
import { addToCart } from '../../store/cart/cart';  
import { decrementInventoryOnAdd, } from '../../store/products';




export default function ProductDetails() {
  const products = useSelector(state => state.products);
  const { id } = useParams();
  const selectedProduct = products.find(product => product._id === id);
  console.log('selectedProduct', selectedProduct);
  const dispatch = useDispatch();

  const addDispatcher = (product) => {
    dispatch(addToCart(product));
    dispatch(decrementInventoryOnAdd(product));
  };


  return (
    <div style= {{margin: "auto", marginTop: '50px'}}>
      <Card sx ={{ maxWidth: '80%'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {selectedProduct.name}
          </Typography>
        </CardContent>
        <CardMedia
        sx={{ height: 200 }}
        image={`https://source.unsplash.com/random?${selectedProduct.name}`}
        title={selectedProduct.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedProduct.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedProduct.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          onClick={() => addDispatcher(selectedProduct)}
          size="small">ADD TO CART</Button>
          <Button size="small">VIEW DETAILS</Button>
        </CardActions>
      </Card>
    </div>

  );
}
