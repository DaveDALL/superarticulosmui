import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, CardActions, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import CardItemsCartRedering from './CardItemsCartRedering'
import CustomerForm from './CustomerForm'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {

  const {cart, calculateItemsInCart, alertMessage, setAlertMessage} = useContext(CartContext)
  const itemsInCart = calculateItemsInCart()

  const ItemCartRendering = cartItem => {
    return (
      <Grid item container xs={12} sx={{justifyContent: "center"}} m={1}>
        <CardItemsCartRedering cartItem={cartItem}/>
      </Grid>
    )
  }

  const alertNotification = () => {
    if(alertMessage.value === "true") {
      switch(alertMessage.type) {
        case "error" :
          toast.error(alertMessage.msg, {
            position: toast.POSITION.BOTTOM_CENTER
          })
        break
        case "success" :
          toast.success(alertMessage.msg, {
            position: toast.POSITION.BOTTOM_CENTER
          })
        break
        case "warning" :
          toast.warn(alertMessage.msg, {
            position: toast.POSITION.TOP_CENTER
          })
        break
      }
    }
    setTimeout(() => {
      setAlertMessage([])
    }, 300)
  }

  return (
    <Grid container direction='column'>
        {alertNotification()}
        <ToastContainer />
        <Grid item xs={0} md={2}/>
        <Grid item container xs={12} md={8} mt={4} sx={{justifyContent:'center'}}>
            <Typography variant="h4" sx={{color:'#F15025'}}> 
                CARRITO DE COMPRAS
            </Typography>
        </Grid>
        {itemsInCart ? (
          <Grid>
            <Grid item container m={3}>
                {cart.map(cartItem => ItemCartRendering(cartItem))}
            </Grid>
            <Grid item container direction="column" sx={{justifyContent:"center"}}>
              <CustomerForm />
            </Grid>
            <Grid item xs={0} md={2}/>
          </Grid>) : (
          <Grid container direction='column'>
            <Grid item xs={0} md={2}/>
            <Grid item container mt={4} xs={12} md={8} sx={{justifyContent:'center'}}>
                <Typography variant='h6' sx={{color:'blue'}}>
                  TU CARRITO SE ENCUENTRA VACIO
                </Typography>
            </Grid>
            <Grid item container mt={4} xs={12} md={8} sx={{justifyContent:'center'}}>
              <Link style={{textDecoration: 'none'}} to='/catalog'>
                <CardActions>
                    <Button
                      sx={{color:'#F15025'}}
                      variant="outlined"
                      size="h6">
                        IR A COMPRAR
                    </Button>
                </CardActions>
              </Link>
            </Grid>
            <Grid item xs={0} md={2}/>
          </Grid>
        )}
    </Grid>
  )
}

export default Cart
