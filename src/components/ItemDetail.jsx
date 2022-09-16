import React from 'react'
import ItemCount from './ItemCount'
import { posterPeliculas } from '../mocks/mockData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
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
    <div>
      <h2>Detalle de: {title}</h2>
      <h4>{release_date}</h4>
      <img src={posterPeliculas(poster_path)} alt="" />
      <h3>Descripcion: {overview}</h3>
      <h5>Puntaje general: {vote_average}</h5>
      <h5>Price: ${price}</h5>
      {compraLlena ? <div>
        <Button variant="outlined"onClick={()=>navigate('/cart')}>Ir al carrito</Button> 
        <Button variant="outlined"onClick={()=>navigate('/')}>Seguir comprando</Button> 
      </div>: <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>}
    </div>
  )
}
