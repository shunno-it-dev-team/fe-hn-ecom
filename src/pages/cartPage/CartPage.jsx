import { useState } from "react";

const CartPage = () => {
  // Sample cart data (can be replaced with actual data)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 2900.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 1900.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-base-300 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            {/* Cart Items */}
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
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-500">
                      {item.price} x {item.quantity} BDT
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="card shadow-md bg-base-100 p-4">
              <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
              <p className="text-gray-700">Subtotal: {total.toFixed(2)} BDT</p>

              <div className="mt-4">
                <button className="btn btn-primary w-full">
                  Proceed to Checkout
                </button>
                <button className="btn btn-outline w-full mt-2">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
