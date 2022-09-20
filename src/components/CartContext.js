import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {{ 

const [cartList, setCartList] = useState([]);


const addItem = (item, qty) => {
    let itemForCart ={
        ...item, qty
    }
    setCartList ([
        ...cartList,
        itemForCart
    ])
    }

const clearCart = () => setCartList ([]);

const isInCart = (id) => setCartList.find(item=>item.id === id) ? true : false;

const removeItem = (id) => {
    let newCartList = cartList.filter ( item => item.id !== id)
    setCartList(newCartList)
}

}

    return (
<CartContext.Provider value={{addItem, clearCart, removeItem }}>
    {children}
</CartContext.Provider>

) ;
    }

export default CartContextProvider;