import { useEffect, useState } from "react";
import "./Products.css";
import { Box } from "@mui/material";
import apiconfig from "../../services/apiconfig";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { getProductsApi } from "../../services/endpoint";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (products.length === 0) {
          // const data = await apiconfig({ endpoint: getProductsApi });
          const data = await apiconfig({
            endpoint: "https://fakestoreapi.com/products",
          });
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
    products.filter((a) => {});
  }, [selectedCategory]);

  const handleCatChange = (selected) => {
    setSelectedCategory(selected);
    const filteredProducts = products.filter((a) => a.category === selected);
    setProducts(filteredProducts);
  };

  // TODO: map the fetched products here
  return (
    <Box sx={{ m: 2 }}>
      <Categories handleCatChange={handleCatChange} />
      <ProductList productList={products} />
    </Box>
  );
}
