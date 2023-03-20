import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { Link } from 'react-router-dom'

const CardRendering = props => {
  
    return (
        <Card sx={{ maxWidth:400, maxHeight:500}} m={2} key={props.product.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150px"
          width="100%"
          image={props.product.imageurl}
          alt={props.product.name}
          sx={{objectFit: "contain", p: 1}}
        />
        <CardContent sx={{height: "160px"}}>
          <Typography gutterBottom variant="h6" component="div">
            {props.product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $ {props.product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
             {props.product.shortdescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link style={{textDecoration: 'none'}} to={`/productdetail/${props.product.id}`}>
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