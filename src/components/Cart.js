import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContex } from "./CartContext";
import { db } from "./Utils/FirebaseConfig";
import { collection,doc,setDoc,updateDoc,increment,serverTimestamp, addDoc, getFirestore} from "firebase/firestore"

const Cart = () =>{

  const test = useContext(CartContex);


  
    const order = {

    buyer:{
        name:"Roman Riquelme",
        email:"roman@gmail.com",
        prone:"12546523"

    },
    date:serverTimestamp(),
    items: test.cartList.map(item => ({id: item.id, title:item.name, price:item.price, quantity:item.quantity })) ,
  
  }
  

  const handleClick = () =>{

    const db = getFirestore();
    const orderCollection= collection(db,"orders");
    addDoc(orderCollection, order)
    .then(({id}) => console.log(id))
  }



return(
    <>

{
test.cartList.map(item=><li >{item.name} <img src={item.image} /> <button  onClick={()=>test.removeItem(item.id)}>ELIMINAR</button><h4 >{item.price} usd</h4></li>)
     }


     
     <h3>Total =</h3>
      <button className="btnPagar" onClick={handleClick}>Pagar</button>
      <Link to='/'><button className="continue">Seguir comprando</button></Link>
    
    </>
    );
    }
    
export default Cart;