import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
              label="Full Name"
              placeholder='Enter Name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
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
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              placeholder='Confirm Password'
              type="password"
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
          </div>
          

          <Button type='submit' style={{ margin: 10, width:'33vw'}} variant="contained" >Register</Button>
          

        </Box>
    
    )
}

export default Register
