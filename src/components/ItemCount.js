import { useState } from "react";
import CartWidget from "./CartWidget";

const ItemCount = ({onAdd ,stock=0, initial=1}) => {

    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
            
        }

        
    }



        return (
            <>

    <div class="btn-group btn-group-sm" role="group" aria-label ="Small button group">
        <button type="button" class="btn btn-primary" onClick={increment}>Agregar</button>
        <button type="button" class="btn btn-light">{count}</button>
        <button type="button" class="btn btn-danger" onClick={decrement}>Quitar</button>
        
    </div>

            </>
        
        );
}

export default ItemCount ;
