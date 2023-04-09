import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import ProductCounter from './ProductCounter'

const CardProductDetailRender = ({ product }) => {

    const {id, name, brand, imageurl, longdescription, price, stock} = product

  return (
    <Card sx={{ maxWidth:700, maxHeight:900 }} key={id}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image={imageurl}
                alt={name}
                sx={{objectFit: "contain", p: 1}}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {brand}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $ {Number(price).toFixed(2)}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{color:"red"}}>
                    CONTAMOS CON STOCK DE {stock} PIEZAS <br/> ¡¡ COMPRA YA, QUE SE ACABAN !!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {longdescription}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardContent>
            <ProductCounter 
                id={id}
                name={name}
                imageurl={imageurl}
                price={price}
                stock={stock}
            />
        </CardContent>
  </Card>
  )
}

export default CardProductDetailRender
