import React from 'react'
import ItemCount from './ItemCount'
import { posterPeliculas } from '../mocks/mockData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({movieDetail}) {

  let [contador, setContador] = useState(1);
  let [compraLlena, setCompraLlena] = useState(false);
  movieDetail = {...movieDetail, price: 15, stock: 10};
  movieDetail.img =  `${posterPeliculas(movieDetail.poster_path)}`;
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext);
  
  const {title, overview, release_date, vote_average, poster_path, price, stock, img, id} = movieDetail;


  const onAdd = () => {
    let purchase = {
      id,
      title, 
      price,
      img,
      quantity:contador
    }
    setCompraLlena(true);
    addItem(purchase);
  }

  return (
    <Box sx={{display: "flex", justifyContent:"center", alignItems: "center", margin: "7rem 0 0 0rem", flexDirection: "column"}}>
      <Box sx={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
        <Box sx={{width: "30%", display: "flex", justifyContent:"center", alignItems: "center"}}>
          <img src={posterPeliculas(poster_path)} alt="" />
        </Box>
        <Box sx={{width: "70%"}}>
          <h2>{title}</h2>
          <h4>Release date: {release_date}</h4>
          <h3>Description: {overview}</h3>
          <h5>Vote average: {vote_average}</h5>
          <h5>Price: ${price}</h5>
        </Box>
      </Box>
      {compraLlena ? <Box>
        <Button variant="outlined"onClick={()=>navigate('/cart')}>Ir al carrito</Button> 
        <Button variant="outlined"onClick={()=>navigate('/')}>Seguir comprando</Button> 
      </Box>: <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>}
    </Box>
  )
}
