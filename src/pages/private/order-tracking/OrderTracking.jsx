import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const OrderTracking = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
      {/*================ PROGRESS TRACKER ================ */}
      <div className="max-w-screen-xl mx-auto  p-4 sm:p-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
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
        <div className="lg:col-span-2  sm:p-6 rounded-lg border ">
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
                    <div className="w-12 h-12 bg-base-200 rounded-md border">
                      <img src="" alt="" />
                    </div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>x1</td>
                  <td>$1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-base-200 rounded-md border"></div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>x1</td>
                  <td>$1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-base-200 rounded-md border"></div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>x1</td>
                  <td>$1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-base-200 rounded-md border"></div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>x1</td>
                  <td>$1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-base-200 rounded-md border"></div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>x1</td>
                  <td>$1,499</td>
                </tr>
                <tr>
                  <td className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-base-200 rounded-md border"></div>
                    <div>Apple iMac 27”</div>
                  </td>
                  <td>x1</td>
                  <td>$1,499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*================ ORDER SUMMARY ================ */}
        <div className="border p-4 sm:p-6 rounded-lg ">
          <h2 className="text-lg sm:text-xl text-primary font-bold mb-4">
            Order Details
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Order date:</strong> 24 November 2023
            </li>
            <li>
              <strong>Email:</strong> name@example.com
            </li>
            <li>
              <strong>Phone:</strong> +123 456 7890
            </li>
            <li>
              <strong>Payment method:</strong>{" "}
              <span className="text-primary">●</span> Credit Card
            </li>
            <li>
              <strong>Shipping address:</strong> Master Para, Saheb Bazar,
              Rajshahi
            </li>
            <li>
              <strong>Total price:</strong>{" "}
              <span className="font-bold text-warning">$7,191.00 </span>
            </li>
          </ul>
          <div className="mt-6 space-y-2">
            <button className="btn btn-error w-full">Cancel the order</button>
            <button className="btn btn-primary w-full">Order details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
