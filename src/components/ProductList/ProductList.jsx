import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
