import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContex } from "./CartContext";
import { db } from "./Utils/FirebaseConfig";
import { collection,doc,setDoc,updateDoc,increment,serverTimestamp} from "firebase/firestore"

const Cart = () =>{

  const test = useContext(CartContex);

  
  const createOrder = ( ) => {
  let itemForDb = test.cartList.map(item => ({
      id: item.id,
      title: item.name,
      price: item.price,
      qty: item.stock
  }))
  
    let order = {

    buyer:{
        name:"Roman Riquelme",
        email:"roman@gmail.com",
        prone:"12546523"

    },
    date:serverTimestamp(),
    items: itemForDb 
    
  }
  
  console.log(createOrder);




  const createOrderInFireStore = async ()=>{
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order)
    return newOrderRef;
  }
  createOrderInFireStore()
  .then(result => {
    alert("your order has been taken " + result.id)
    test.cartList.forEach(async(item) =>{
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef,{
        stock: increment(-item.qtyItem)
        
      });
    })
    test.removeItem()
  })


    .catch(err=> console.log(err))

  }
return(
    <>

{
test.cartList.map(item=><li >{item.name} <img src={item.image} /> <button  onClick={()=>test.removeItem(item.id)}>ELIMINAR</button><h4 >{item.price} usd</h4></li>)
     }


     
     <h3>Total =</h3>
      <button className="btnPagar" onClick={createOrder}>Pagar</button>
      <Link to='/'><button className="continue">Seguir comprando</button></Link>
    
    </>
    );
    }
    
export default Cart;