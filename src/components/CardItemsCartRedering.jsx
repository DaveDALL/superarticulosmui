import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const CardItemsCartRedering = ({cartItem}) => {

    const {removeItemFromCart} =useContext(CartContext)
    const {id, name, imageurl, price, cartQuantity, subtotal} = cartItem

  return (
    <>
      <Card key={id} sx={{ maxWidth:1050, display:'inline-flex', width:'80%' }}>
        <CardMedia
            sx={{ height:59, width:'8vw', objectFit: "contain", p: 1 }}
            image={imageurl}
            title={name}
        />
        <CardContent sx={{width:'14vw'}}>
            <Typography gutterBottom variant="body1" component="div">
                {name}
            </Typography>
        </CardContent>
        <CardContent sx={{width:'4.5vw'}}>
            <Typography variant="body1" color="text.secondary" gutterBottom component="div">
                {cartQuantity} 
                {(cartQuantity === 1) ? " pieza" : " piezas"}
            </Typography>
        </CardContent>
        <CardContent sx={{width:'9vw'}}>
            <Typography variant="body1" color="text.secondary" gutterBottom component="div">
                Unitario: $ {Number(price).toFixed(2)}
            </Typography>
        </CardContent>
        <CardContent sx={{width:'10vw'}}>
            <Typography variant="body1" color="text.secondary" gutterBottom component="div">
               Subtotal: $ {Number(subtotal).toFixed(2)}
            </Typography>
        </CardContent>
        <CardActions sx={{width:'5vw'}}>
            <Button
                sx={{backgroundColor: "#F15025"}}
                variant="contained"
                size="small"
                onClick={() => removeItemFromCart(id)}>
                Eliminar
            </Button>
        </CardActions>
    </Card>
    </>
  )
}

export default CardItemsCartRedering
