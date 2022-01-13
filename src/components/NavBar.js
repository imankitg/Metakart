import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'rgb(54, 69, 79)'}} >
        <Toolbar>
      
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Metakart
          </Typography>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="cart"
            sx={{ mr: 1 }}
          >
            <ShoppingCartRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="mode"
            sx={{ mr: 1 }}
          >
            <WbSunnyRoundedIcon />
          </IconButton>

          <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>

          

        </Toolbar>
      </AppBar>
    </Box>
  );
}
