import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import apiconfig from "../../services/apiconfig";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (products.length === 0) {
          const data = await apiconfig({ endpoint: "/products/categories" });
          setProducts(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ m: 2 }}>
      <ProductCard />
    </Box>
  );
}
