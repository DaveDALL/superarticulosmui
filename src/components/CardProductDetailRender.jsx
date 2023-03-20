import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import ProductCounter from './ProductCounter'

const CardProductDetailRender = props => {
    console.log(props.product.name)
  return (
    <Card sx={{ maxWidth:700, maxHeight:900 }} key={props.product.id}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image={props.product.imageurl}
                alt={props.product.name}
                sx={{objectFit: "contain", p: 1}}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.product.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {props.product.brand}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $ {props.product.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{color:"red"}}>
                    CONTAMOS CON STOCK DE {props.product.stock} PIEZAS <br/> ¡¡ COMPRA YA, QUE SE ACABAN !!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {props.product.longdescription}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardContent>
            <ProductCounter 
                id={props.product.id}
                name={props.product.name}
                price={props.product.proce}
                stock={props.product.stock}
            />
        </CardContent>
  </Card>
  )
}

export default CardProductDetailRender
