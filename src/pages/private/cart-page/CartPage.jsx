import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const initialCartItems = data.slice(0, 5).map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: Math.floor(Math.random() * 3) + 1,
          image: product.image,
        }));
        setCartItems(initialCartItems);
        setLoading(false);
      });
  }, []);

  // ============ Calculate total ============
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  //============ Handle remove item ============
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-base-300 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

        {loading ? (
          <p>Loading products...</p>
        ) : cartItems.length === 0 ? (
          <p className="text-primary">Your cart is empty.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            {/*============ Cart Items ============ */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="card card-side shadow-md bg-base-100 p-4 flex items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-secondary">
                      {item.name}
                    </h2>
                    <p className="text-primary">
                      {item.price} x {item.quantity} &#2547;
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-lg"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaIconByKeyName iconName="FaTrash" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/*============ Cart Summary ============ */}
            <div className="card shadow-md bg-base-100 p-4">
              <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
              <p className="text-primary">
                Subtotal: &#2547;{total.toFixed(2)}
              </p>

              <div className="mt-4">
                <button className="btn btn-primary w-full">
                  Proceed to Checkout
                </button>
                <Link to="/">
                  <button className="btn btn-outline w-full mt-2">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
