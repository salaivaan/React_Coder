import { useState } from "react";
import CartWidget from "./CartWidget";

const ItemCount = ({onAdd ,stock=0, initial=1}) => {



    const [qty, setQty] = useState(0)

    




    const increment = () => {
        if (qty < stock) {
            setQty (qty + 1);
        }
    }

    const decrement = () => {
        if (qty > initial) {
            setQty(qty - 1)
            
        }


        
    }

    


        return (
            <>

    <div class="btn-group btn-group-sm" role="group" aria-label ="Small button group">
        <button type="button" class="btn btn-primary" onClick={increment}>Agregar</button>
        <button type="button" class="btn btn-light">{qty}</button>
        <button type="button" class="btn btn-danger" onClick={decrement}>Quitar</button>
        
        {
                stock && qty
                ? <button variant="contained" color="primary" onClick={() => onAdd(qty)}>Add to Cart</button>
                : <button>Add to Cart</button>
            }   
        
    
    </div>

            </>

        );
}

export default ItemCount ;
