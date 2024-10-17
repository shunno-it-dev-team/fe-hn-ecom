const OrderHistory = () => {
  const orders = [
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364373",
      date: "21.12.2023",
      price: "$3,200",
      status: "Cancelled",
    },
    {
      id: "#FWB127364374",
      date: "25.12.2023",
      price: "$7,200",
      status: "In transit",
    },
    {
      id: "#FWB127364374",
      date: "25.12.2023",
      price: "$7,200",
      status: "In transit",
    },
  ];

  return (
    <section className="bg-base-100 py-2 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          {/* HEADER */}
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">
              Order List
            </h2>
            <div className="mt-6 gap-4 sm:mt-0 sm:flex sm:items-center">
              <div>
                <label
                  htmlFor="order-type"
                  className="sr-only text-sm text-base-content/40"
                >
                  Select order type
                </label>
                <select
                  id="order-type"
                  className="select select-bordered w-full min-w-[8rem] text-sm"
                >
                  <option selected>All orders</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="transit">In transit</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <span className="inlinebold">from</span>
              <div>
                <label
                  htmlFor="duration"
                  className="sr-only text-sm text-base-content/40"
                >
                  Select duration
                </label>
                <select
                  id="duration"
                  className="select select-bordered w-full text-sm"
                >
                  <option selected>this week</option>
                  <option value="this month">this month</option>
                  <option value="last 3 months">the last 3 months</option>
                  <option value="last 6 months">the last 6 months</option>
                  <option value="this year">this year</option>
                </select>
              </div>
            </div>
          </div>

          {/* ORDER TABLE */}
          <div className="mt-6 flow-root sm:mt-8">
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm">
                <thead className="text-base-content/70">
                  <tr>
                    <th className="px-4 py-2 text-left">Order ID</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-base-300">
                  {orders.map((order, index) => (
                    <tr key={index} className="bg-base-200">
                      <td className="px-4 py-2 font-semibold">
                        <a
                          href="#"
                          className="hover:underline text-base-content/70"
                        >
                          {order.id}
                        </a>
                      </td>
                      <td className="px-4 py-2 text-base-content/70">
                        {order.date}
                      </td>
                      <td className="px-4 py-2 text-base-content/70">
                        {order.price}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`badge px-2.5 py-0.5 text-xs font-medium text-base-100
                            ${
                              order.status === "Cancelled"
                                ? "badge-error"
                                : "badge-secondary"
                            }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                          >
                            Order again
                          </button>
                          <a href="#" className="btn btn-outline btn-sm">
                            View details
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="text-base-content/70">
                  <tr>
                    <td colSpan="5" className="px-4 py-2 text-left">
                      <span className="font-semibold">Total Orders:</span>{" "}
                      {orders.length}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
