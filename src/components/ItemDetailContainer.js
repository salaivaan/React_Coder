import { useEffect } from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";
import ItemDetail from "./ItemListContainer";
import { db, fsFetchDetail } from "./Utils/FirebaseConfig";
import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemDetailContainer = () => {

  const [products , setProducts] = useState([]);
  const {id} = useParams();
//componentDidMount
useEffect(()=> 
{
  fsFetchDetail(id)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
},[id]);

console.log(products)







    return (
<>



<Item item={products}/>
<ItemCount stock={products.stock}/>
<ItemDetail item={products}/>




</>)
}


    

export default ItemDetailContainer;
