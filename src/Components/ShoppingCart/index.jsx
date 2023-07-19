// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { If, Else, When, Unless} from "react-if";
import * as React from 'react';
import Footer from "../Footer";
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(product => {
      total += product.price;
    })
    return total;
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <When condition={cart.length > 0}>
          <div className="shoppingCart">
            <ul>
              <h2>Order Summary</h2>
              {cart.map((product, index) => (
                <li key={`simpleCart-${index}`} className="item">
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </li>
              ))}
              <li key={'shoppingCartTotal'} className="item">
                <p>Total: ${calculateTotal()}</p>
              </li>
            </ul>
          </div>
<Card
variant='outlined'
sx={{
  maxWidth: '100%',
  maxHeight: 'max-content',
  mx: 'auto',
  overflow: 'auto',
  resize: 'horizontal',
}}
>
  <Typography level="h2" fontSize="xl" startDecorator={<InfoOutlined />}>
    !!!This is a FAKE STORE!!! Please do not enter any real information.!!!
  </Typography>

  <Divider inset="none" />
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Card #</FormLabel>
            <Input endDecorator={<CreditCardIcon />} />
          </FormControl>
          <FormControl>
            <FormLabel>Expiration date</FormLabel>
            <Input endDecorator={<CreditCardIcon />} />
          </FormControl>
          <FormControl>
            <FormLabel>CVC/CVV</FormLabel>
            <Input endDecorator={<InfoOutlined />} />
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Card holder name</FormLabel>
            <Input placeholder="Enter cardholder's full name" />
          </FormControl>
          <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
          <CardActions sx={{ gridColumn: '1/-1' }}>
            <Button variant="solid" color="primary">
              Add card
            </Button>
          </CardActions>
        </CardContent>
</Card>
<Footer />
</When>
<Unless condition={cart.length > 0}>
            <h2>Shopping Cart</h2>
            <h3>CART IS EMPTY</h3>
            </Unless>
            <Button color="inherit"
              component={Link}
              to={`/`}
            >Close</Button>

      </Box>
    </>
  );
}
