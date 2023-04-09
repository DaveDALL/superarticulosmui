import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null)

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedItems = JSON.parse(localStorage.getItem("savedCart"))
        if(savedItems) {
            return JSON.parse(localStorage.getItem("savedCart"))
        } else {
            return []
        }
    })
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("savedCart"))
        if(savedItems && savedItems.length == 0 ){
            localStorage.removeItem("savedCart")
        } else{
            localStorage.setItem("savedCart", JSON.stringify(cart))
        }
    }, [cart])

    const addQuantity = (stock, id) => {
        const cartItems = [...cart]
        const itemisIncart = cartItems.find(cartItem => cartItem.id === id)
        if (itemisIncart) {
            cartItems.map(cartItem => {
                if(cartItem.id === id) {
                    ((cartItem.quantity + quantity)>=stock) ? console.log("No hay existencias") : setQuantity(quantity+1)
                }
            })
        } else {
            (quantity >= stock) ? console.log("No hay existencias") : setQuantity(quantity + 1)
        } 
    }

    const substractQuantity = () => {
        (quantity <= 1) ? console.log("No se puede asignar cantidades menores a 1") : setQuantity(quantity - 1)
    }

    const resetQuantity= () => {
        setQuantity(0)
    }

    const addItemToCart = (cartProduct, quantity) => {
        const cartItems = [...cart]
        const itemIsInCart = cartItems.find(cartItem => cartItem.id == cartProduct.id)
        if(itemIsInCart) {
            return (setCart(cartItems.map(cartItem => {
                if(cartItem.id === cartProduct.id) {
                    return {...cartItem, cartQuantity: cartItem.cartQuantity + quantity, subtotal: (cartItem.cartQuantity + quantity) * cartItem.price } 
                } else {return cartItem}
            })), setQuantity(1))
        } else {
            setCart([...cartItems, {id: cartProduct.id, name: cartProduct.name, imageurl: cartProduct.imageurl, stock: cartProduct.stock, price: cartProduct.price, cartQuantity: quantity, subtotal: quantity * cartProduct.price}])
            setQuantity(1)
        }
    }

    const removeItemFromCart = (id) => {
        const cartItems = [...cart]
        const itemIsInCart = cartItems.find(cartItem => cartItem.id == id)
        if(itemIsInCart) {
            return setCart(cartItems.filter(cartItem => cartItem.id !== id))
        }
    }

    const clearFullCart = () => {
        localStorage.clear()
        setCart([])
    }

    const calculateItemsInCart = () => {
        return cart.reduce((acummulator, productsInCart) => {
            return acummulator + productsInCart.cartQuantity
          }, 0) 
    }

    const calculateCartTotal = () => {
        return cart.reduce((acummulator, productsInCart) => {
            return acummulator + productsInCart.subtotal
          }, 0)
    }

  return (
    <CartContext.Provider value={{cart, setCart, quantity, setQuantity, addQuantity, substractQuantity, resetQuantity, addItemToCart, removeItemFromCart, clearFullCart, calculateItemsInCart, calculateCartTotal}}>
        { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider
