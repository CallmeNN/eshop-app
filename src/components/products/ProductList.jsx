import ProductCard from "./ProductCard";
function ProductList({ productList = [] }) {
  return (
    <div className="productlist">
      {productList.map(({ id, image, price, title, description }) => {
        return <ProductCard
          key={id}
          image={image}
          price={price}
          title={title}
          description={description}
        />;
      })}
    </div>
  );
}

export default ProductList;
