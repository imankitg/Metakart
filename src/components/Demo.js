import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "react-router-dom";
import data from "../data";

const Demo = (props) => {

  // let {image,desc,name} = props;
  

  const {id} = useParams();
  console.log(id);
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

    const [productDetail, setProductDetail] = useState({})

    useEffect(()=>{
     const findProduct = data.filter(x=>x._id == id)
     setProductDetail(findProduct[0])
     console.log(findProduct[0])
    //  console.log(productDetail)

    }, [id])
 
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ paddingTop: 20 }}>
        <Box sx={{ height: "100vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ display: "flex" }}>
                
              <Grid item xs={12} md={6}>
                <img
                  src="../images/airpods.jpg"
                  alt="airpods"
                  style={{ width: "100%" }}
                />
                <Typography gutterBottom variant="h5" component="div">
                  
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                 
                  
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ padding: 10 }}
                    >
                     Airpods
                    </Typography>
                  
                  <hr />
                  
                    <Typography variant="h5">Rs 8000</Typography>
                  
                  <hr />
                  
                    <Typography variant="h6" style={{ paddingTop: 30 }}>
                    "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working"
                    </Typography>
                  
                
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="h4" style={{ padding: 10 }}>
                  Order
                </Typography>
                <hr />
                <Typography variant="h5">Status: In Stock</Typography>
                <hr />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Quantity"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <Button style={{ margin: 10 }} variant="contained">Add to Cart</Button>
              </Grid>
              {/* <Grid item xs={6} md={8}>
       
              </Grid> */}
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Demo;
