import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'
import {data} from '../mocks/mockData';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [movieDetail, setMovieDetail] = useState({});
    const [loading , setLoading] = useState(false);
    const {id} = useParams();
   console.log(id)

    useEffect(()=>{
        data
        .then((res) => setMovieDetail(res.find((item)=> item.id.toString() === id)))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [id])

  return (
    <div>
        {loading ? <h2 style={{textAlign:"center", fontFamily:"sans-serif"}}>Cargando...</h2> : <ItemDetail movieDetail={movieDetail}/>}
    </div>
  )
}
