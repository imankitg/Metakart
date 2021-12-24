import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Spinner from "./Spinner";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "../data";
import { useNavigate } from "react-router-dom";

export default function SimpleContainer() {
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // setLoading(false);
  return (
    <React.Fragment>
      {/* {loading && <Spinner/>} */}
      <CssBaseline />
      <Container maxWidth="lg" style={{ paddingTop: 20 }}>
        <Box sx={{ flexGrow: 1 }}>
          <h2 style={{ margin: "inherit", paddingTop: 10, paddingBottom: 20 }}>
            Products
          </h2>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((d, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                
                <Card >
                  <CardActionArea
                    onClick={() => navigate(`/productDescription/${d._id}`)}
                  >
                    
                    <CardMedia
                      component="img"
                      height="auto"
                      image={d.image}
                      alt="electronic items"
                    />
                    <CardContent
                      style={{ color: "white", backgroundColor: "grey" }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {d.name}
                      </Typography>
                      <Typography variant="body2">Rs.{d.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#36454F",
          color: "white",
          marginTop: 26
        }}
      >
        <h4>Copyright &copy; Metakart 2021</h4>
      </div>
    </React.Fragment>
  );
}
