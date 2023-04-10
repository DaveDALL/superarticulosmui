import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import CartWidget from './CartWidget'


const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
      }
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null)
      }

  return (
    <AppBar position='static' sx={{backgroundColor:"#F2FF49"}}>
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Link style={{textDecoration: 'none'}} to="/">
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Sonsie One',
                        fontWeight: 400,
                        color: '#F15025',
                        textDecoration: 'none',
                    }}>
                        SuperArticulos
                </Typography>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="#F15025"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >                   
                         <Link style={{textDecoration: 'none'}} to='/catalog'>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">CATEGORIA</Typography>
                        </MenuItem>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={`/category/${"smartwatch"}`}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">SMARTWATCH</Typography>
                        </MenuItem>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={`/category/${"zurdos"}`}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">PARA ZURDOS</Typography>
                        </MenuItem>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={`/category/${"bocinai"}`}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">BOCINAS INTELIGENTES</Typography>
                        </MenuItem>
                        </Link>
                    </Menu>
                </Box>
                <Link style={{textDecoration: 'none'}} to="/" >
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none'},
                        flexGrow: 1,
                        fontFamily: 'Sonsie One',
                        fontWeight: 400,
                        color: '#F15025',
                        textDecoration: 'none',
                    }}
                >
                    SuperArticulos
                </Typography>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link style={{textDecoration: 'none'}} to="/catalog">
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#F15025', display: 'block', fontFamily: 'Roboto', fontWeight: '500' }}>
                            CATALOGO
                        </Button>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={`/category/${"smartwatch"}`}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#F15025', display: 'block', fontFamily: 'Roboto', fontWeight: '500' }}>
                            SMARTWATCH
                        </Button>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={`/category/${"zurdos"}`}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#F15025', display: 'block', fontFamily: 'Roboto', fontWeight: '500' }}>
                            PARA ZURDOS
                        </Button>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={`/category/${"bocinai"}`}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#F15025', display: 'block', fontFamily: 'Roboto', fontWeight: '500' }}>
                            BOCINAS INTELIGENTES
                        </Button>
                        </Link>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <CartWidget />
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar
