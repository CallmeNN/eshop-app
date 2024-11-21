import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setFilter, clearFilter } from "../../store/actions/productAction";
import "./Products.css";
import { Box } from "@mui/material";
import Categories from "./Categories";
import ProductList from "./ProductList";
import SelectMui from "../../common/components/SelectMui";
import { productService } from "../../services/products";
import { capitalizeFirstLetter } from "../../common/utils/commonFunction";
import {
  setFilterByCategory,
  setFilterToSort,
} from "../../store/actions/filterAction";

const Products = ({
  productList,
  filters,
  onSetFilterByCategory,
  onClearFilter,
  onSetFilterToSort,
}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    console.log("list", productList);
  });

  const sortByMenuItems = {
    default: "Default",
    decreasing: "High to Low",
    increasing: "Low to High",
    newest: "Newest",
  };

  useEffect(() => {
    if (productList.length === 0) {
      const fetchProducts = async () => {
        try {
          const data = await productService.getProducts();
          setProducts(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProducts();
    } else {
      setProducts(productList);
    }
  }, [productList]);

  // Apply category filter when selectedCategory changes
  useEffect(() => {
    if (selectedCategory === "ALL") {
      setProducts(productList);
    } else {
      const filteredProducts = productList.filter(
        (product) =>
          product.category === capitalizeFirstLetter(selectedCategory)
      );
      setProducts(filteredProducts);
    }
  }, [selectedCategory, productList]);

  // Handle category change
  const handleCatChange = (selected) => {
    setSelectedCategory(selected);
    onSetFilterByCategory(selected)
  };

  const handleSortBy = (value) => {
    let sortedProducts = [...products];
    switch (value) {
      case "decreasing":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "increasing":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "default":
        sortedProducts = productList;
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  return (
    <Box
      sx={{
        m: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Categories handleCatChange={handleCatChange} />
      <Box>
        <SelectMui
          menuItemsObj={sortByMenuItems}
          handleSelectChange={handleSortBy}
          label="Sort By"
        />
        <ProductList productList={products} />
      </Box>
    </Box>
  );
};

//return the state you want to map as props in the component
const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetFilterByCategory: (filter) => dispatch(setFilterByCategory(filter)),
    onSetFilterToSort: (filter) => dispatch(setFilterToSort(filter)),
    onClearFilter: () => dispatch(clearFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
