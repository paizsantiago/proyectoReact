import { Box, Button } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCart({itemCart}) {
    const {title, img, price, quantity, id} = itemCart;
    const {removeItem} = useContext(CartContext);

  return (
    <Box className='cartMobile'>
        <Box  className='itemsCart'>
        <img src={img} alt="" className='imgItemCart'/>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <h3>Qty: {quantity}</h3>
        <Button onClick={()=>removeItem(id, quantity)} variant="contained" color="secondary" className='deleteItem' sx={{minWidth: "1rem"}}>X</Button>
        </Box>
    </Box>
  )
}
