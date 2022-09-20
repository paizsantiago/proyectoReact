import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const {contadorCarrito} = useContext(CartContext);
  return (
    <Badge badgeContent={contadorCarrito} color="secondary">
      < ShoppingCartIcon />
    </Badge>
  )
}
