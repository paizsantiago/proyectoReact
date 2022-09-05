import React from 'react'
import ItemCount from './ItemCount'
import { posterPeliculas } from '../mocks/mockData';

export default function ItemDetail({movieDetail}) {

  const {title, overview, release_date, vote_average, poster_path} = movieDetail
  let totalStock = 0;

  const onAdd = (cantidad) => totalStock === 10 ? alert("Stock Agotado") : totalStock += cantidad;

  return (
    <div>
      <h2>Detalle de: {title}</h2>
      <h4>{release_date}</h4>
      <img src={posterPeliculas(poster_path)} alt="" />
      <h3>Descripcion: {overview}</h3>
      <h5>Puntaje general: {vote_average}</h5>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}
