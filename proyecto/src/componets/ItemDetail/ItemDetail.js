import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({item}) => {
  return (
    <div className='row'>
     <div className='producto'>
        <img src={item.imagen} className='img-fluid'alt={item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p> $ {item.precio}</p>
        <p> Cantidad: {item.stock}</p>
     </div>
     <div>
        <ItemCount stockItems={10}/>
     </div>
     </div>
  )
}

export default ItemDetail