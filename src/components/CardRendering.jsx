import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { Link } from 'react-router-dom'

const CardRendering = ({product}) => {

    const {id, name, imageurl, shortdescription, price} = product
  
    return (
      <Card sx={{ minWidth:320, maxWidth:350, maxHeight:500}} m={2} key={id}>
        <CardMedia
            component="img"
            height="150"
            width="100%"
            image={imageurl}
            alt={name}
            sx={{objectFit: "contain", p: 1}}
        />
        <CardContent sx={{height: "160px"}}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $ {Number(price).toFixed(2)} 
          </Typography>
          <Typography variant="body1" color="text.secondary">
             {shortdescription}
          </Typography>
        </CardContent>
        <Link style={{textDecoration: 'none'}} to={`/productdetail/${id}`}>
          <CardActions sx={{justifyContent: "center"}}>
            <Button sx={{backgroundColor: "#F15025"}} variant="contained" size="small" endIcon={<SendIcon />}>
              Ver Detalles
            </Button>
          </CardActions>
        </Link>
    </Card>
    )
}

export default CardRendering