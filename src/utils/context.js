import React, { useEffect, useState } from 'react'
import { createContext ,useContext} from 'react';


export const Context =createContext();

const AppContext=({children})=>{
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0)
    const [cartSubTotal,setCartSubTotal]=useState(0)
    useEffect(()=>{},{cartItems})

    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}
export default AppContext;