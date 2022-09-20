import { useContext} from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

const Cart = () => {

    const test = useContext (CartContext);
    console.log(test)


useEffect(()=> {

})

    return 
    (
<>

<button onClick={test.clear}>Claer All</button>
    {test.cartList.map ( item => <li> {item.name} (qty = {item.qty}) <button onClick={()=> test.removeItem(item.id)}> Eliminar producto </button> </li>)}
    
</>
);

    }



export default Cart;