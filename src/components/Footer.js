import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          flexDirection:"column",
          backgroundColor: "#36454F",
          color: "white",
          marginTop: 20,
          height:'10vh'
        }}
      >
        <Typography variant="h6">Copyright &copy; Metakart 2021</Typography>
      </div>
    </footer>
  );
};

export default Footer;
