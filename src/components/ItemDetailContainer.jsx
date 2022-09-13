import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'
import {data, data2, data3, data4} from '../mocks/mockData';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [movieDetail, setMovieDetail] = useState({});
    const [loading , setLoading] = useState(false);
    const {id} = useParams();


    useEffect(()=>{ //recibe un id y los compara en los distintos fetch para encontrar la coincidencia
        data
        .then((res) => {
          if (res.find((item)=> item.id.toString() === id)) {
            setMovieDetail(res.find((item)=> item.id.toString() === id));
          }else {
            data2
            .then((res) => {
              if (res.find((item)=> item.id.toString() === id)) {
                setMovieDetail(res.find((item)=> item.id.toString() === id));
              }else {
                data3
                .then((res)=>{
                  if (res.find((item)=> item.id.toString() === id)) {
                    setMovieDetail(res.find((item)=> item.id.toString() === id));
                  }else {
                    data4
                    .then((res) => {
                      if (res.find((item)=> item.id.toString() === id)) {
                        setMovieDetail(res.find((item)=> item.id.toString() === id));
                      }
                    })
                    .catch((error) => console.log(error))
                    .finally(()=> setLoading(false))
                  }
                })
                .catch((error) => console.log(error))
                .finally(()=> setLoading(false))
              }
            })
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
          }
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [id])

  return (
    <div>
        {loading ? <h2 style={{textAlign:"center", fontFamily:"sans-serif"}}>Cargando...</h2> : <ItemDetail movieDetail={movieDetail}/>}
    </div>
  )
}
