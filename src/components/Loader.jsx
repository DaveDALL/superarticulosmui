import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {

  return (
    <>
        <Box sx={{display:'grid', height:450, alignContent:'center'}}>
            <Box sx={{flexDirection:"row", display:'flex', justifyContent:'center'}}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                    <CircularProgress size={40} />
                    <CircularProgress size={60} />
                    <CircularProgress size={80} />
                </Box>
            </Box>
            <Box sx={{flexDirection:"row", display:'flex', justifyContent:'center'}}>
                <Typography variant='h6'>Cargando...</Typography>
            </Box>
        </Box>
    </>
  )
}

export default Loader
