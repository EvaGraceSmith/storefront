// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const cart  = useSelector(state => state.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Our Store
          </Typography>
          <Button color="inherit"
                                  component={Link}
                                  to={`cart/}`}
                                  >Cart({cart.length})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
