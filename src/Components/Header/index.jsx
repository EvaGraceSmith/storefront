// import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import './styles.scss';

export default function Header() {
  const cart = useSelector(state => state.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <Grid container>
            <Grid item>
              <Button component={Link} to="/" color="inherit">
                <Typography className= "header-font-color" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Our Store
                </Typography>
              </Button>
            </Grid>
            <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
              <Button color="inherit"
                component={Link}
                to="/cart">
                <Typography className="header-font-color">CART ({cart.length})</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
