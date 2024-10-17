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
    <section className="bg-base-100 py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0  ">
        <div className="mx-auto max-w-5xl ">
          {/* HEADER */}
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">
              My orders
            </h2>

            <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <div>
                <label
                  htmlFor="order-type"
                  className="sr-only mb-2 block text-sm font-medium text-base-content/40"
                >
                  Select order type
                </label>
                <select
                  id="order-type"
                  className="select select-bordered w-full min-w-[8rem]"
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
                  className="sr-only mb-2 block text-sm font-medium text-base-content/40"
                >
                  Select duration
                </label>
                <select id="duration" className="select select-bordered w-full">
                  <option selected>this week</option>
                  <option value="this month">this month</option>
                  <option value="last 3 months">the last 3 months</option>
                  <option value="last 6 months">the last 6 months</option>
                  <option value="this year">this year</option>
                </select>
              </div>
            </div>
          </div>

          {/* ORDER LIST */}
          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-base-300">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-y-4 py-6"
                >
                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <p className="text-base font-bold">Order ID:</p>
                    <p className="mt-1.5 text-base font-semibold text-base-content/40">
                      <a href="#" className="hover:underline">
                        {order.id}
                      </a>
                    </p>
                  </div>

                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <p className="text-base font-bold">Date:</p>
                    <p className="mt-1.5 text-base font-semibold text-base-content/40">
                      {order.date}
                    </p>
                  </div>

                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <p className="text-base font-bold">Price:</p>
                    <p className="mt-1.5 text-base font-semibold text-base-content/40">
                      {order.price}
                    </p>
                  </div>

                  <div className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <p className="text-base font-bold">Status:</p>
                    <span
                      className={`badge px-2.5 py-0.5 text-xs font-medium  rounded-none text-base-100
                        ${
                          order.status === "Cancelled"
                            ? "badge-error"
                            : "badge-secondary"
                        }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm w-full lg:w-auto"
                    >
                      Order again
                    </button>
                    <a
                      href="#"
                      className="btn btn-outline btn-sm w-full lg:w-auto"
                    >
                      View details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PAGINATION */}
        {/* <div className="w-72 join grid grid-cols-2  ">
          <button className="join-item btn btn-outline btn-sm">
            Previous page
          </button>
          <button className="join-item btn btn-outline btn-sm">Next</button>
        </div> */}
      </div>
    </section>
  );
};

export default OrderHistory;
