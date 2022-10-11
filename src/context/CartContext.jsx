import { createContext, useEffect, useState } from "react";

const moviesLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const contadorStorage = localStorage.getItem('contador') || 0;


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(moviesLocalStorage);
    const [contadorCarrito, setContadorCarrito] = useState(contadorStorage);


    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('contador', contadorCarrito);
    }, [cart, contadorCarrito])


    const addItem = (item) =>{
        const existInCart = cart.some((movie) => movie.id === item.id)
        if(existInCart){
            const newCart = cart.map((movie) =>{
                if(movie.id === item.id){
                    if(movie.quantity === movie.stock){
                        return movie
                    }else{
                        return {...movie, quantity: movie.quantity + item.quantity}
                    }
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
            setCart(cart.filter((item) => item.id !== itemId));
            setContadorCarrito(contadorCarrito - quantity);
    }
    
    const clear = () => {
        setCart([]);
        setContadorCarrito(0);
    }
    
    const isInCart = (id) =>{
        const existInCart = cart.some((item) => item.id === id);
        if (existInCart) {
           for (const movie of cart) {
                if(movie.id === id){
                    if(movie.stock <= movie.quantity){
                        return true;
                    }
                }
           }
        }else{
            return false;
        }
    }

    const cartTotal = () =>{
        return cart.reduce((acc, item) => acc += item.price * item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem, contadorCarrito, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

