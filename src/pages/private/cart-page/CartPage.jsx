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

  // ================ CALCULATE TOTAL ================
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ================ HANDLE QUANTITY CHANGE ================
  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  // ================ HANDLE REMOVE ITEM ================
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-10 p-4  bg-base-100 ">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-primary">Shopping Cart</h1>

        {loading ? (
          <p>Loading products...</p>
        ) : cartItems.length === 0 ? (
          <p className="text-primary">Your cart is empty.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-5 justify-between ">
            {/* ================ CART ITEMS ================ */}
            <div className="lg:col-span-4 space-y-2 p-4 rounded-lg border">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-2 md:p-2 rounded-lg transition-colors hover:bg-primary hover:bg-opacity-30"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-primary mb-1">
                          {/* {item.name} */}
                          {item.name.length > 30
                            ? item.name.slice(0, 30) + "..."
                            : item.name}
                        </h4>
                        <div className=" items-center ">
                          <p className="text-sm text-base-content">
                            &#2547; {item.price} x {item.quantity}
                          </p>
                          <form className="mt-1">
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                              className="input input-xs input-warning bg-base-100  w-16 "
                            />
                          </form>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        className="btn btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaIconByKeyName
                          iconName="FaTrashAlt"
                          style={{ color: "red" }}
                          size="2x"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================ CART SUMMARY ================ */}
            <div className="lg:col-span-1  bg-base-100 p-4 border rounded-lg">
              <h2 className="text-xl font-bold mb-2 text-primary">
                Cart Summary
              </h2>
              <p className="text-warning font-bold">
                Subtotal: &#2547;{total.toFixed(2)}
              </p>

              <div className=" flex mt-4 flex-col gap-4">
                <Link
                  to="/checkout"
                  className="btn btn-sm  btn-primary  w-full"
                >
                  Proceed to Checkout
                </Link>
                <Link to="/" className="btn btn-sm  btn-secondary w-full">
                  Continue Shopping
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
