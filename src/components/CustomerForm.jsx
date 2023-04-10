import React from 'react'
import '../App.css'
import { Grid, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import {collection, addDoc, getFirestore, serverTimestamp} from 'firebase/firestore'

const CustomerForm = () => {

    const [orderId, setOrderId] = useState(null)
    const [customerName, setCustomerName] = useState("")
    const [customerLastName, setCustomerLastName] = useState("")
    const [customerPhone, setCuomerPhone] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [customerValEmail, setCustomerValEmail] = useState("")
    const [mailValidation, setMailValidation] = useState(null)
    const [otherDataValidation, setOtherDataValidation] = useState(null)
    const [orderedItems, setOrderedItems] = useState([])
    const {cart, calculateCartTotal, clearFullCart} = useContext(CartContext)
    const totalCartItems = calculateCartTotal()

    useEffect(() => {
      const cartItems = [...cart]
      setOrderedItems(cartItems.map((item) => {
          return (
            {...item}, {id: item.id, name: item.name, price: item.price, quantity: item.cartQuantity, subtotal: item.subtotal} 
          )
        }))
      if(customerValEmail.length > 0) {
        if(customerValEmail === customerEmail){
          setMailValidation(true)
        } else {
          setMailValidation(false)
        }
      } else {
        setMailValidation(null)
      }
      if(customerName.length > 0 && customerLastName.length > 0 && customerPhone > 0){
        setOtherDataValidation(true)
      } else {
        setOtherDataValidation(false)
      }

    }, [cart, customerValEmail, customerEmail, customerName, customerLastName, customerPhone])

    const order = {
      buyer: {
        firstName: customerName,
        lastName: customerLastName,
        phoneNumer: customerPhone,
        emailAddress: customerEmail
      },
      items: orderedItems,
      total: totalCartItems, 
      date: serverTimestamp()
    }

    const db = getFirestore()
    const ordersCollection = collection(db, "customerOrder")

    const handleCustomerOrder = (e) => {
      e.preventDefault()
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    }

  return (
    <>
        <Grid item sm={0} md={2} />
        <Grid item container sm={12} md={8} sx={{justifyContent:"center", display:'grid'}}>
          <Typography variant='h5' mt={2} mb={4}>
            SU TOTAL ES DE : $ {Number(totalCartItems).toFixed(2)}
          </Typography>
          <Grid item>
            <form onSubmit={handleCustomerOrder}>
              <label >* Campos requeridos para ser llenados</label>
              <label htmlFor="customerName">NOMBRE * :</label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                placeholder="ingrese su nombre"
                minLength="3"
                onChange={(e) => setCustomerName(e.target.value.toUpperCase())}
                required
              />
              <label htmlFor="customerLastName">APELLIDO * :</label>
              <input
                id="customerLastName"
                name="customerLastName"
                type="text"
                placeholder="ingrese su apellido"
                minLength="2"
                onChange={(e) => setCustomerLastName(e.target.value.toUpperCase())} 
                required
              />
              <label htmlFor="customerPhone">TELEFONO * :</label>
              <input
                id="customerPhone"
                name="customerPhone"
                type="text"
                placeholder="ingrese su número Telefónico"
                minLength="10"
                maxLength="12"
                onChange={(e) => setCuomerPhone(e.target.value)}
                required
              />
              <label htmlFor="customerEmail">EMAIL * :</label>
              <input
                id="customerEmail"
                name="customerEmail"
                type="email"
                placeholder="ingrese su e-mail"
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
              <label htmlFor="customerValEmail">CONFIRME EMAIL * :</label>
              <input
                id="customerValEmail"
                name="customerValEmail"
                type="email"
                placeholder="valide su e-mail"
                onChange={(e) => setCustomerValEmail(e.target.value)}
                required
              />
              {!mailValidation ? <p>Valide correctamente su email</p> : <p>Email validado</p>}
              {!otherDataValidation ? <p>Introduzca corectamente sus datos</p> : <p></p>}
              {(mailValidation && otherDataValidation) ? (
                <button type="submit">COMPRAR PRODUCTOS</button>
              ) : (
                <button type="submit" disabled>COMPRAR PRODUCTOS</button>
              )}
            </form>
          </Grid>
        </Grid>
        <Grid container sx={{justifyContent:'center', display:'grid'}}>
          <Typography variant='h5' mt={2} mb={4} sx={{textAlign:'center'}} >
            Su número de Orden es: {orderId}
          </Typography>
          {(orderId !== null) ? (
            <Button 
              variant='contained'
              size='large'
              sx={{alignSelf:'center', backgroundColor: "#F15025"}}
              onClick={() => clearFullCart()}
            >DE ACUERDO</Button>
          ) : (
            <Button variant='contained' size='large' disabled sx={{alignSelf:'center'}}>DE ACUERDO</Button>)}  
        </Grid>
        <Grid item sm={0} md={2} />
    </>
  )
}

export default CustomerForm
