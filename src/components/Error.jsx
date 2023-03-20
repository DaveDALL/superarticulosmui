import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <Grid container direction='column'>
            <Grid item container>
                <Grid item xs={2}/>
                <Grid item container xs={8} sx={{display:'block', justifySelf: 'center'}}>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight:400, color: 'black'}}  variant="h1" component="h1" mt={6} textAlign='center'>
                    404
                    </Typography>
                    <br></br>
                    <Typography sx={{fontFamily: 'Roboto', fontWeight:400, color: 'black'}}  variant="h3" component="h3" mb={4} textAlign='center'>
                    ENLACE NO ENCONTRADO
                    </Typography>
                    <br></br>
                    <Link style={{textDecoration: 'none'}} to="/">
                        <CardActions sx={{justifyContent: "center"}}>
                            <Button variant="outlined" component="h6">
                            Regresar a la pagina de inicio
                            </Button>
                        </CardActions>
                    </Link>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </Grid>
      
    </>
  )
}

export default Error
