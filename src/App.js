import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CartPage from "./pages/CartPage/CartPage";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === product.id);
    console.log(updatedCart, "updatedcart");
    console.log(itemIndex, "itemIndex");
    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <div className="nav-header-title">Product Catalog</div>
            <Link to="/cart" className="cart-button">
              Cart ({cartItemCount})
            </Link>
          </nav>
        </header>
        <Routes>
          <Route index element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/products/:id"
            element={<ProductDetailPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
