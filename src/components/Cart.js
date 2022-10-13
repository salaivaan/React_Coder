import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContex } from "./CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "./Utils/FirebaseConfig";
import { collection,doc,setDoc} from "firebase/firestore"

const Cart = () =>{

  const test = useContext(CartContex);

  const createOrder = ( ) => {
  let itemDb = test.cartList.map(item => ({
    id: item.id,
    title: item.name,
    qty: item.qty,
    price: item.price
  }))
  
    let order = {

    buyer:{
        name:"Roman Riquelme",
        email:"roman@gmail.com",
        prone:"12546523"

    },
    date:serverTimestamp(),
    items:  itemDb
  }
  
  




  const createOrderInFireStore = async ()=>{
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order)
    return newOrderRef;
  }
  createOrderInFireStore()
    .then(result => alert("your order has been taken " + result.id))
    .catch(err=> console.log(err))

  }
return(
    <>
     {
        test.cartList.map(item=><li>{item.name} (qty={item.qty}) <button onClick={()=> test.removeItem(item.id)}>ELIMINAR</button><h4>{item.price} usd</h4></li>)
     }


     
     <h3>Total =</h3>
      <button className="btnPagar" onClick={createOrder}>Pagar</button>
      <Link to='/'><button className="continue">Seguir comprando</button></Link>
    
    </>
    );
    }
    
export default Cart;