
import { Children, createContext, useState } from "react";


 export const CartContex = createContext();

 const CartContexProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);
   /*  const addItem = (item) =>{
        setCartList(item)
    } */

    const addItem = (item, qty) =>{

        let itemForCart = {
            ...item,
            qty
        }
        setCartList([
            ...cartList,
            itemForCart
        ])
    }

    const removeItem = (id) =>{
        let newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }
    return(<>
        <CartContex.Provider value={{cartList, addItem, removeItem}}>
            {children}
        </CartContex.Provider>
    </>);
 }
 export default CartContexProvider; 