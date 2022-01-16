import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const preventDefault = (e) => e.preventDefault();
    return (
        
        <Box
          component="form"
          onSubmit={preventDefault}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '33vw' },
          }}
          noValidate
          autoComplete="off" style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}
        >
          <Typography variant='h4'>Log In</Typography>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder='Enter Email'
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              placeholder='Enter Password'
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <Typography variant='h7'>Don't Have Account? <Link to="/register">Register</Link></Typography>

          <Button type='submit' style={{ margin: 10, width:'33vw'}} variant="contained" >Log In</Button>
          

        </Box>
    
    )
}

export default LogIn
