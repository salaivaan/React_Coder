import { useState} from "react";
import { Link } from 'react-router-dom';

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

    <div class="btn-group btn-group-sm col-md-3 container-fluid d-flex justify-content-around bd-highlight mb-2" role="group" aria-label ="Small button group">
        <button type="button" class="btn btn-primary" onClick={increment}>Agregar</button>
        <button type="button" class="btn btn-light">{qty}</button>
        <button type="button" class="btn btn-danger" onClick={decrement}>Quitar</button>


        <Link to='/Cart'><button className="buy" onClick={()=> onAdd =(qty)}>Comprar</button></Link>
   
         
  
       
    </div>

            </>

        );
}

export default ItemCount ;
