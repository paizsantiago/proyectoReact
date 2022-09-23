import { Box, Button } from '@mui/material';
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

export default function Cart() {
  const {cart, clear} = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Box>
      {!cart.length ? 
      <Box className="containerCart">
          <h2>Ups your cart is empty :(</h2>
          <h2>Check our movies</h2>
        <Button variant="contained" onClick={()=>navigate('/')}>Go shopping</Button>
      </Box> :
      <Box>
        {cart.map((itemCart)=> <ItemCart itemCart={itemCart}/>)}
        <Button onClick={()=>clear()}>Clear Cart</Button>
        <Button>Finish my purchase</Button>
      </Box>
      }
    </Box>
  )
}
