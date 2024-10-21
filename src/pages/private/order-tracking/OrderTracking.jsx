import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const OrderTracking = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
      {/*================ PROGRESS TRACKER ================ */}
      <div className="max-w-screen-xl mx-auto  p-4 sm:p-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-6">
          Track the delivery of order #957684673
        </h2>

        {/*  steps */}
        <div className="p-4 sm:p-6 rounded-lg">
          <ul className="steps steps-vertical sm:steps-horizontal w-full">
            {/* Step 1 */}
            <li data-content="✓" className="step step-primary">
              <div className="flex flex-col items-center text-center">
                <FaIconByKeyName iconName={"FaClipboardList"} size="2x" />
                <p className="text-sm mt-2">
                  Order placed
                  <br />
                  <span className="text-xs text-primary">
                    19 Nov 2023: 10:45
                  </span>
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li data-content="✓" className="step step-primary">
              <div className="flex flex-col items-center text-center">
                <FaIconByKeyName iconName={"FaCreditCard"} size="2x" />
                <p className="text-sm mt-2">
                  Payment accepted
                  <br />
                  <span className="text-xs text-primary">
                    19 Nov 2023: 10:47
                  </span>
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li data-content="✓" className="step step-primary">
              <div className="flex flex-col items-center text-center">
                <FaIconByKeyName iconName={"FaTruckLoading"} size="2x" />
                <p className="text-sm mt-2">
                  Products delivered to the courier - DHL
                  <br />
                  <span className="text-xs text-primary">
                    22 Nov 2023: 12:27
                  </span>
                </p>
              </div>
            </li>

            {/* Step 4 */}
            <li data-content="✓" className="step step-primary">
              <div className="flex flex-col items-center text-center">
                <FaIconByKeyName iconName={"FaWarehouse"} size="2x" />
                <p className="text-sm mt-2">
                  Products in the courier warehouse
                  <br />
                  <span className="text-xs text-primary">
                    23 Nov 2023: 15:15
                  </span>
                </p>
              </div>
            </li>

            {/* Step 5 */}
            <li className="step">
              <div className="flex flex-col items-center text-center text-base-content/50">
                <FaIconByKeyName iconName={"FaTruckMoving"} size="2x" />
                <p className="text-sm mt-2">
                  Products in delivery progress
                  <br />
                  <span className="text-xs text-primary">Today</span>
                </p>
              </div>
            </li>

            {/* Step 6 */}
            <li className="step">
              <div className="flex flex-col items-center text-center text-base-content/50">
                <FaIconByKeyName iconName={"FaCheckSquare"} size="2x" />
                <p className="text-sm mt-2">
                  Products delivered
                  <br />
                  <span className="text-xs text-primary">
                    Estimated delivery tomorrow
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/*================ MAIN CONTENT ================ */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 p-4">
        {/* ================ PRODUCTS LIST TABLE ================*/}
        <div className="lg:col-span-2  sm:p-6 rounded-lg border shadow-lg ">
          <div className="overflow-y-auto max-h-60 ">
            <table className="table ">
              <thead className="sticky top-0 bg-primary ">
                <tr className="text-base-100">
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* Product Rows */}
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-base-200 rounded-md border">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt="Movie"
                        />
                      </figure>
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>&#215;1</td>
                  <td>&#2547;1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-base-200 rounded-md border">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt="Movie"
                        />
                      </figure>
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>&#215;1</td>
                  <td>&#2547;1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-base-200 rounded-md border">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt="Movie"
                        />
                      </figure>
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>&#215;1</td>
                  <td>&#2547;1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-base-200 rounded-md border">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt="Movie"
                        />
                      </figure>
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>&#215;1</td>
                  <td>&#2547;1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-base-200 rounded-md border">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt="Movie"
                        />
                      </figure>
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>&#215;1</td>
                  <td>&#2547;1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-base-200 rounded-md border">
                      <figure>
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt="Movie"
                        />
                      </figure>
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>&#215;1</td>
                  <td>&#2547;1,499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*================ ORDER SUMMARY ================ */}
        <div className="max-w-md mx-auto rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-primary">Order Details</h2>

          <div className="mb-2 ">
            <p className="text-sm text-base-400">Order date</p>
            <p className="font-medium">24 November 2023</p>
          </div>

          <div className="mb-2">
            <p className="text-sm text-base-400">Email</p>
            <p className="font-medium">name@example.com</p>
          </div>

          <div className="mb-2">
            <p className="text-sm text-base-400">Phone</p>
            <p className="font-medium">+123 456 7890</p>
          </div>

          <div className="mb-2 flex items-center">
            <p className="text-sm text-base-400">Payment method</p>
            <div className="ml-2 flex items-center">
              <span className="text-error-500 mr-1">
                {/* <!-- Payment Icon, example for Mastercard --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 48 48"
                >
                  <circle cx="16" cy="24" r="12" fill="#FF5F00" />
                  <circle cx="32" cy="24" r="12" fill="#EB001B" />
                  <circle cx="24" cy="24" r="12" fill="#F79E1B" opacity=".5" />
                </svg>
              </span>
              <p className="font-medium">Credit Card</p>
            </div>
          </div>

          <div className="mb-2">
            <p className="text-sm text-base-400">Shipping address</p>
            <p className="font-medium">Master Para, Saheb Bazar, Rajshahi</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-base-400">Total price</p>
            <p className="font-bold text-lg text-gray-900">&#2547;7,191.00</p>
          </div>

          <div className="mt-6 space-x-2 flex items-center justify-center">
            <button className="btn btn-sm btn-error  hover:btn-secondary transition-all w-40 ">
              Cancel the order
            </button>
            <button className="btn btn-sm btn-info  hover:btn-success transition-all w-40">
              Order details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
