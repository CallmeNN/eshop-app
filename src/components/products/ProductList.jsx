import ProductCard from "./ProductCard";
function ProductList({ productList = [] }) {
  return (
    <div className="productlist">
      {productList.map((productData) => {
        return <ProductCard
          productData={productData}
        />;
      })}
    </div>
  );
}

export default ProductList;
