import { Card, Box, CardMedia } from "@mui/material";
import { useLocation } from "react-router-dom";

function ProductDetails() {

  const location = useLocation();
  const {imageUrl,name} = location.state;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height
        backgroundColor: "#f5f5f5", // Optional background for visual clarity
      }}
    >
      <Card
        sx={{
          minWidth: 645,
          minHeight: 350,
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <Box
        sx={{
          display:"flex",
          gap:"14px"
        }}
        >
        <CardMedia
          sx={{
            width: "50%",
            height: { xs: "200px", sm: "250px" },
            objectFit: "cover",
            margin: "auto",
            padding: "8px",
          }}
          component="img"
          image={imageUrl}
          alt="product image"
        />
        <Box>
          <h2>{name}</h2>
        </Box>
        </Box>
        
        
      </Card>
    </Box>
  );
}

export default ProductDetails;
