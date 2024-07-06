import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import apiconfig from "../../services/apiconfig";
import Categories from "./Categories";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (products.length === 0) {
          const data = await apiconfig({ endpoint: "/products" });
          setProducts(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {

    products.filter((a)=>{

    })
      
  }, [selectedCategory]);



  const handleCatChange = (selected)=>{
    setSelectedCategory(selected)
    const filteredProducts = products.filter((a)=>a.category===selected)
    setProducts(filteredProducts);
  }

  // TODO: map the fetched products here
  return (
    <Box sx={{ m: 2 }}>
      <Categories handleCatChange={handleCatChange}/>
      <ProductCard />
    </Box>
  );
}
