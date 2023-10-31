import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(
<div className="container" id="itemcount">
  <div className="row mb-2">
    <div className="col-md-4 offset-md-4 text-center">
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
        <button type="button" className="btn btn-outline-primary">{counter}</button>
        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
      </div>
    </div>
  </div>
  <div className="row mb-5">
    <div className="col-md-4 offset-md-4 text-center">
      <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>
    </div>
  </div>
</div>
    )
}

export default ItemCount;