import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

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
        
    }       
    
    const removeItem = (itemId) =>{
        setCart(cart.find((item) => item.id !== itemId));
    }
    
    const clear = () => {
        setCart([]);
    }
    
    const isInCart = (id) =>{
        return cart.some((item) => item.id === id);
    }

    return (
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

