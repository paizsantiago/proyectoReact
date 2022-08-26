import React, { useEffect, useState } from 'react'
import Item from './Item';

export default function ItemList() {

    let [productos, setProductos] = useState([]);

    useEffect(()=>{
        let promesaProductos = new Promise((res, rej)=>{
            setTimeout(()=>{
                //array de productos para el ejercicio
                res([
                    {id: 1, title: "Spiderman-Homecoming", description: "Pelicula de SuperHeroes", price: 10, pictureUrl: "https://i.postimg.cc/jqpWkzJ9/spidey.jpg"},
                    {id: 2, title: "Iron man", description: "Pelicula de SuperHeroes", price: 10, pictureUrl: "https://i.postimg.cc/jqpWkzJ9/spidey.jpg"},
                    {id: 3, title: "Hulk", description: "Pelicula de SuperHeroes", price: 10, pictureUrl: "https://i.postimg.cc/jqpWkzJ9/spidey.jpg"},
                    {id: 4, title: "Antman", description: "Pelicula de SuperHeroes", price: 10, pictureUrl: "https://i.postimg.cc/jqpWkzJ9/spidey.jpg"},
                    {id: 5, title: "Black Phanter", description: "Pelicula de SuperHeroes", price: 10, pictureUrl: "https://i.postimg.cc/jqpWkzJ9/spidey.jpg"},
                    {id: 6, title: "Avengers Endgame", description: "Pelicula de SuperHeroes", price: 10, pictureUrl: "https://i.postimg.cc/jqpWkzJ9/spidey.jpg"}
                ])
            }, 2000);
        });

        promesaProductos.then((res)=>{
            setProductos(res);
        }).catch()
        .finally();

    }, [])

  return (
    //map para transformar los productos
    productos.map((item) => <Item item={item}/>)
  )
}
