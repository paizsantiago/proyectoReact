import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [contadorCarrito, setContadorCarrito] = useState(0);

    const addItem = (item) =>{
        const existInCart = cart.some((movie) => movie.id === item.id)
        if(existInCart){
            const newCart = cart.map((movie) =>{
                if(movie.id === item.id){
                    return {...movie, quantity: movie.quantity+ item.quantity}
                }else{
                    return movie;
                }
            })
            setCart(newCart);
        }else{
            setCart([...cart, item]);
        }
        setContadorCarrito(contadorCarrito+item.quantity);
    }       
    
    const removeItem = (itemId, quantity) =>{
            setCart(cart.filter((item) => item.id !== itemId))
            setContadorCarrito(contadorCarrito - quantity);
        
    }
    
    const clear = () => {
        setCart([]);
        setContadorCarrito(0);
    }
    
    const isInCart = (id) =>{
        return cart.some((item) => item.id === id);
    }

    return (
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem, contadorCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

