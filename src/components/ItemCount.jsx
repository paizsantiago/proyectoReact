import React, { useState } from 'react'

export default function ItemCount({stock, initial, onAdd}) {
    let [contador, setContador] = useState(initial);
  return (
    <div>
        <button onClick={()=>{
            if(contador > initial){
                setContador(contador-1);
            }
        }}>-</button>
        <h3>{contador}</h3>
        <button onClick={()=>{
            if(contador < stock){
                setContador(contador+1);
            }
        }}>+</button>
        <button onClick={() =>{
            onAdd(contador);
            setContador(initial);
        }}>Agregar al carrito</button>
    </div>
  )
}
