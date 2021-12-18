import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link } from "@mui/material";
import data from "../data";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ paddingTop: 20 }}>
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
                <Item>{d.name}</Item>
                <Card component={Link} to="/about">
                  <CardActionArea >
                    <CardMedia
                      component="img"
                      height="auto"
                      image={d.image}
                      alt="green iguana"
                    />
                    <CardContent
                      style={{ color: "white", backgroundColor: "grey" }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {d.brand}
                      </Typography>
                      <Typography variant="body2">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
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
        }}
      >
        <h4>Copyright &copy; Metakart 2021</h4>
      </div>
    </React.Fragment>
  );
}
