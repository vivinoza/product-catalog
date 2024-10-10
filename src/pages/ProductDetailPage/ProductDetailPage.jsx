import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api-helper";
import "./ProductDetailPage.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (addToCart && product) {
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
      <h1 className="product-detail-name">{product.title}</h1>
      <p className="product-detail-price">${product.price}</p>
      <p className="product-detail-description">{product.description}</p>
      <div className="product-quantity">
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          className="quantity-input"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
