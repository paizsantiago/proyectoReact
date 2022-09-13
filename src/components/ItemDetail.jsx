import React from 'react'
import ItemCount from './ItemCount'
import { posterPeliculas } from '../mocks/mockData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ItemDetail({movieDetail}) {

  let [contador, setContador] = useState(1);
  let [compraLlena, setCompraLlena] = useState(false);
  const navigate = useNavigate();
  
  const {title, overview, release_date, vote_average, poster_path} = movieDetail;
  let totalStock = 0;


  const onAdd = (cantidad) => {
    setCompraLlena(true);
    alert(`añadiste ${cantidad} items al carrito`)
  }

  console.log(totalStock)
  return (
    <div>
      <h2>Detalle de: {title}</h2>
      <h4>{release_date}</h4>
      <img src={posterPeliculas(poster_path)} alt="" />
      <h3>Descripcion: {overview}</h3>
      <h5>Puntaje general: {vote_average}</h5>
      {compraLlena ? <div>
        <button onClick={()=>navigate('/cart')}>Ir al carrito</button> 
        <button onClick={()=>navigate('/')}>Seguir comprando</button> 
      </div>: <ItemCount stock={10} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>}
    </div>
  )
}
