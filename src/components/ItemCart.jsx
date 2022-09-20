import { Box, Button } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCart({itemCart}) {
    const {title, img, price, quantity, id} = itemCart;
    const {removeItem} = useContext(CartContext);

  return (
    <Box sx={{marginTop:"5rem"}}>
        <Box sx={{display: "flex", gap:"1rem", }}>
        <h2>{title}</h2>
        <img src={img} alt="" />
        <h3>{price}</h3>
        <h3>{quantity}</h3>
        <Button onClick={()=>removeItem(id, quantity)}>X</Button>
        </Box>
        <Box>

        </Box>
    </Box>
  )
}
