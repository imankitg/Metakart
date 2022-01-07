import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "react-router-dom";
import data from "../data";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

  const { id } = useParams();
  console.log(id);
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const [productDetail, setProductDetail] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const findProduct = data.filter((x) => Number(x._id) === Number(id));
    setloading(true);
    setProductDetail({ ...findProduct[0] });
    setTimeout(() => setloading(false), 1000);
  }, [id]);

  console.log(productDetail, "product");

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CssBaseline />
          <Container maxWidth="lg" style={{ paddingTop: 20, overflow:'auto' }}>
            <Button variant="contained" style={{margin:10}} onClick={() => navigate('/')} >Go Back</Button>
            <Box sx={{ height: "100vh" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ display: "flex" }}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={productDetail.image}
                      alt="airpods"
                      style={{ width: "100%" }}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ padding: 10 }}
                    >
                      {productDetail.name}
                    </Typography>

                    <hr />

                    <Typography variant="h5">
                      $ {productDetail.price}
                    </Typography>

                    <hr />

                    <Typography variant="h6" style={{ paddingTop: 30 }}>
                      {productDetail.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h4" style={{ padding: 10 }}>
                      Order
                    </Typography>
                    <hr />
                    <Typography variant="h5">
                      Status:
                      {productDetail.countInStock > 0
                        ? "In Stock"
                        : "Out of stock"}
                    </Typography>
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
                        {[...Array(productDetail.countInStock).keys()].map((e, index) => {
                          return(<MenuItem key={index} value={e+1}>{e+1}</MenuItem>)

                        })}
                        
                      </Select>
                    </FormControl>
                    <Button style={{ margin: 10 }} variant="contained">
                      Add to Cart
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </>
      )}
    </React.Fragment>
  );
};

export default ProductDetail;
