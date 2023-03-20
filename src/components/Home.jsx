import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const Home = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item container >
            <Grid item xs={2}/>
            <Grid item container xs={8} sx={{justifyContent:'center'}}>
                <Typography sx={{fontFamily: 'Roboto', fontWeight:400, color: '#F15025' }} variant="h3" component="h2" mt={6}>
                    Bienvenidos a SuperArticulos
                </Typography>
                <br/>
                <Typography sx={{fontFamily: 'Roboto', fontWeight:400, color: '#F15025' }} variant="h4" component="h3" mb={4}>
                    ¡¡ Desde los más extraños hasta los más grandiosos !!
                </Typography>
                <CardMedia
                    component="img"
                    width="90%"
                    image='/images/gadgets.jpg'
                    alt="imagen de gadgets"
                    m={5}
                />
            </Grid>
            <Grid item xs={2}/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
