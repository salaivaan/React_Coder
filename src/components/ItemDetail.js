
import ItemCount from "./ItemCount";
import { db, firebaseFetch } from "./Utils/FirebaseConfig";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContex  } from "./CartContext";
import Item from "./Item";




const ItemDetail = ({item}) => {

  const [itemCount, setItemCount] = useState(0)
  const test = useContext(CartContex);
  
  const onAdd = (qty)=>{
      setItemCount(qty);
      test.addItem(item);

}


  
      return (
      
<>

<Item item={item}/>
<ItemCount 


/>



</> )}


export default ItemDetail;


