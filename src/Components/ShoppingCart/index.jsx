// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const cart  = useSelector(state => state.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit"
          component={Link}
        to={`/}`}
            >Close</Button>
    </Box>
  );
  }
