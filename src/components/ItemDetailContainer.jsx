import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'
import {data} from '../mocks/mockData';

export default function ItemDetailContainer() {

    const [movieDetail, setMovieDetail] = useState({});
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        data
        .then((res) => setMovieDetail(res.find((item)=> item.id === 278)))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    console.log("detalle : " , movieDetail);
    

  return (
    <div>
        {loading ? <h2 style={{textAlign:"center", fontFamily:"sans-serif"}}>Cargando...</h2> : <ItemDetail movieDetail={movieDetail}/>}
    </div>
  )
}
