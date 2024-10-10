import "./CartPage.css";

const CartPage = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="cart-item-name">{item.title}</span>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
                className="quantity-input"
              />
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="cart-total">Total Price: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
