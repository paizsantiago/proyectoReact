import { Box, Button, Divider } from '@mui/material';
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Cart() {
  const {cart, clear, cartTotal} = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Box>
      {!cart.length ? 
      <Box className="containerCart">
          <h2>Ups your cart is empty :(</h2>
          <h2>Check our movies</h2>
        <Box>
        <Button variant="contained"onClick={()=>navigate('/')}>Go shopping <ShoppingBagIcon sx={{fontSize: "1.2rem", padding: ".4rem"}}/></Button>
        </Box>
      </Box> :
      <Box className='cart'>
        <Box className='containerItems'>
            <h2 className='titleCart'>Shopping Cart</h2>
            <Divider/>
            {cart.map((itemCart)=> <ItemCart itemCart={itemCart}/>)}
        </Box>
        <Box className='cartInfoContainer'>
            <Box className='cartInfo'>
              <h3><span>Total</span>: ${cartTotal()}</h3>
              <Box className='botonesCartInfo'>
              <Button onClick={()=>clear()} variant="contained">Clear Cart</Button>
              <Button onClick={()=>navigate('/checkout')} variant="contained">Proceed to checkout</Button>
              </Box>
            </Box>
        </Box>
      </Box>
      }
    </Box>
  )
}
