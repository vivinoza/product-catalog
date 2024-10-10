import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-name">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">
        {product.description.substring(0, 100)}...
      </p>
      <div className="product-detail-add-section">
        <Link to={`/products/${product.id}`} className="product-detail-link">
          View Details
        </Link>
        <button
          className="add-to-cart-btn-card"
          onClick={() => addToCart(product, 1)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
