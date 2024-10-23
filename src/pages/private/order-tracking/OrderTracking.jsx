// import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

// const OrderTracking = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
//       {/* ================ PROGRESS TRACKER ================ */}
//       <div className="max-w-screen-xl mx-auto  p-4 sm:p-6">
//         {/* Heading */}
//         <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-6">
//           Track the delivery of order #957684673
//         </h2>

//         {/* ================ STEPS ================ */}
//         <div className="p-4 sm:p-6 rounded-lg">
//           <ul className="steps steps-vertical sm:steps-horizontal w-full">
//             {/* Step 1 */}
//             <li data-content="✓" className="step step-primary">
//               <div className="flex flex-col items-center text-center">
//                 <FaIconByKeyName iconName={"FaClipboardList"} size="2x" />
//                 <p className="text-sm mt-2">
//                   Order placed
//                   <br />
//                   <span className="text-xs text-primary">19 Nov 2023</span>
//                 </p>
//               </div>
//             </li>

//             {/* Step 2 */}
//             <li data-content="✓" className="step step-primary">
//               <div className="flex flex-col items-center text-center">
//                 <FaIconByKeyName iconName={"FaCreditCard"} size="2x" />
//                 <p className="text-sm mt-2">
//                   Payment accepted
//                   <br />
//                   <span className="text-xs text-primary">19 Nov 2023</span>
//                 </p>
//               </div>
//             </li>

//             {/* Step 3 */}
//             <li data-content="✓" className="step step-primary">
//               <div className="flex flex-col items-center text-center">
//                 <FaIconByKeyName iconName={"FaTruckLoading"} size="2x" />
//                 <p className="text-sm mt-2">
//                   Products delivered to the courier - DHL
//                   <br />
//                   <span className="text-xs text-primary">22 Nov 2023</span>
//                 </p>
//               </div>
//             </li>

//             {/* Step 4 */}
//             <li data-content="✓" className="step step-primary">
//               <div className="flex flex-col items-center text-center">
//                 <FaIconByKeyName iconName={"FaWarehouse"} size="2x" />
//                 <p className="text-sm mt-2">
//                   Products in the courier warehouse
//                   <br />
//                   <span className="text-xs text-primary">23 Nov 2023</span>
//                 </p>
//               </div>
//             </li>

//             {/* Step 5 */}
//             <li className="step">
//               <div className="flex flex-col items-center text-center text-base-content/50">
//                 <FaIconByKeyName iconName={"FaTruckMoving"} size="2x" />
//                 <p className="text-sm mt-2">
//                   Products in delivery progress
//                   <br />
//                   <span className="text-xs text-primary">Today</span>
//                 </p>
//               </div>
//             </li>

//             {/* Step 6 */}
//             <li className="step">
//               <div className="flex flex-col items-center text-center text-base-content/50">
//                 <FaIconByKeyName iconName={"FaCheckSquare"} size="2x" />
//                 <p className="text-sm mt-2">
//                   Products delivered
//                   <br />
//                   <span className="text-xs text-primary">
//                     Estimated delivery tomorrow
//                   </span>
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/*================ MAIN CONTENT ================ */}
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
//         {/* ================ PRODUCTS LIST TABLE ================*/}
//         <div className="lg:col-span-2  sm:p-6 rounded-lg border shadow-lg">
//           <div className="overflow-y-auto max-h-60 ">
//             <table className="table ">
//               <thead className="sticky top-0 bg-primary ">
//                 <tr className="text-base-100">
//                   <th>Product</th>
//                   <th>Qty</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Product Rows */}
//                 <tr>
//                   <td className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-base-200 rounded-md border">
//                       <figure>
//                         <img
//                           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                           alt="Movie"
//                         />
//                       </figure>
//                     </div>
//                     <div>Apple iMac 27”</div>
//                   </td>
//                   <td>&#215;1</td>
//                   <td>&#2547;1,499</td>
//                 </tr>
//                 <tr>
//                   <td className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-base-200 rounded-md border">
//                       <figure>
//                         <img
//                           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                           alt="Movie"
//                         />
//                       </figure>
//                     </div>
//                     <div>Apple iMac 27”</div>
//                   </td>
//                   <td>&#215;1</td>
//                   <td>&#2547;1,499</td>
//                 </tr>
//                 <tr>
//                   <td className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-base-200 rounded-md border">
//                       <figure>
//                         <img
//                           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                           alt="Movie"
//                         />
//                       </figure>
//                     </div>
//                     <div>Apple iMac 27”</div>
//                   </td>
//                   <td>&#215;1</td>
//                   <td>&#2547;1,499</td>
//                 </tr>
//                 <tr>
//                   <td className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-base-200 rounded-md border">
//                       <figure>
//                         <img
//                           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                           alt="Movie"
//                         />
//                       </figure>
//                     </div>
//                     <div>Apple iMac 27”</div>
//                   </td>
//                   <td>&#215;1</td>
//                   <td>&#2547;1,499</td>
//                 </tr>
//                 <tr>
//                   <td className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-base-200 rounded-md border">
//                       <figure>
//                         <img
//                           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                           alt="Movie"
//                         />
//                       </figure>
//                     </div>
//                     <div>Apple iMac 27”</div>
//                   </td>
//                   <td>&#215;1</td>
//                   <td>&#2547;1,499</td>
//                 </tr>
//                 <tr>
//                   <td className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-base-200 rounded-md border">
//                       <figure>
//                         <img
//                           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                           alt="Movie"
//                         />
//                       </figure>
//                     </div>
//                     <div>Apple iMac 27”</div>
//                   </td>
//                   <td>&#215;1</td>
//                   <td>&#2547;1,499</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/*================ ORDER SUMMARY ================ */}
//         <div className="max-w-md mx-auto rounded-lg shadow-lg p-4">
//           <h2 className="text-xl font-bold mb-4 text-primary">Order Details</h2>

//           <div className="mb-2 flex items-center justify-between ">
//             <p className="text-sm text-base-400">Order date</p>
//             <p className="font-medium text-sm">24 November 2023</p>
//           </div>

//           <div className="mb-2 flex items-center justify-between">
//             <p className="text-sm text-base-400">Email</p>
//             <p className="font-medium text-sm">name@example.com</p>
//           </div>

//           <div className="mb-2 flex items-center justify-between">
//             <p className="text-sm text-base-400">Phone</p>
//             <p className="font-medium text-sm">+123 456 7890</p>
//           </div>

//           <div className="mb-2 flex items-center justify-between">
//             <p className="text-sm text-base-400">Payment method</p>
//             <div className="ml-2 flex items-center">
//               <span className="text-error-500 mr-1">
//                 <FaIconByKeyName iconName={"FaCreditCard"} size="2x" />
//               </span>
//               <p className="font-medium text-sm">Credit Card</p>
//             </div>
//           </div>

//           <div className="mb-2 flex items-center justify-between  ">
//             <p className="text-sm text-base-400">Shipping address</p>
//             <p className="font-medium text-xs">
//               Master Para, Saheb Bazar, Rajshahi
//             </p>
//           </div>

//           <div className="mb-2 flex items-center justify-between">
//             <p className="text-sm text-base-400">Total price</p>
//             <p className="font-bold text-sm text-base-content ">
//               &#2547;7,191.00
//             </p>
//           </div>

//           <div className="mt-6 flex items-center justify-center space-x-2">
//             <button className="btn btn-sm btn-error btn-outline flex-grow">
//               Cancel the order
//             </button>
//             <button className="btn btn-sm btn-primary flex-grow">
//               Order details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderTracking;
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const OrderTracking = () => {
  // Steps data
  const steps = [
    {
      icon: "FaClipboardList",
      label: "Order placed",
      date: "19 Nov 2023",
      completed: true,
    },
    {
      icon: "FaCreditCard",
      label: "Payment accepted",
      date: "19 Nov 2023",
      completed: true,
    },
    {
      icon: "FaTruckLoading",
      label: "Products delivered to the courier - DHL",
      date: "22 Nov 2023",
      completed: true,
    },
    {
      icon: "FaWarehouse",
      label: "Products in the courier warehouse",
      date: "23 Nov 2023",
      completed: true,
    },
    {
      icon: "FaTruckMoving",
      label: "Products in delivery progress",
      date: "Today",
      completed: false,
    },
    {
      icon: "FaCheckSquare",
      label: "Products delivered",
      date: "Estimated delivery tomorrow",
      completed: false,
    },
  ];

  // Product data
  const products = [
    {
      name: "Apple iMac 27”",
      qty: 1,
      price: 1499,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      name: "Apple iMac 27”",
      qty: 1,
      price: 1499,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      name: "Apple iMac 27”",
      qty: 1,
      price: 1499,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      name: "Apple iMac 27”",
      qty: 1,
      price: 1499,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      name: "Apple iMac 27”",
      qty: 1,
      price: 1499,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      name: "Apple iMac 27”",
      qty: 1,
      price: 1499,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
      {/* ================ PROGRESS TRACKER ================ */}
      <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-6">
          Track the delivery of order #957684673
        </h2>

        {/* ================ STEPS ================ */}
        <div className="p-4 sm:p-6 rounded-lg">
          <ul className="steps steps-vertical sm:steps-horizontal w-full">
            {steps.map((step, index) => (
              <li
                key={index}
                data-content={step.completed ? "✓" : ""}
                className={`step ${step.completed ? "step-primary" : ""}`}
              >
                <div className="flex flex-col items-center text-center">
                  <FaIconByKeyName iconName={step.icon} size="2x" />
                  <p className="text-sm mt-2">
                    {step.label}
                    <br />
                    <span className="text-xs text-primary">{step.date}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*================ MAIN CONTENT ================ */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {/* ================ PRODUCTS LIST TABLE ================*/}
        <div className="lg:col-span-2 sm:p-6 rounded-lg border shadow-lg">
          <div className="overflow-y-auto max-h-60 ">
            <table className="table">
              <thead className="sticky top-0 bg-primary ">
                <tr className="text-base-100">
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-base-200 rounded-md border">
                        <figure>
                          <img src={product.imgSrc} alt={product.name} />
                        </figure>
                      </div>
                      <div>{product.name}</div>
                    </td>
                    <td>&#215;{product.qty}</td>
                    <td>&#2547;{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/*================ ORDER SUMMARY ================ */}
        <div className="max-w-md mx-auto rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-primary">Order Details</h2>

          <div className="mb-2 flex items-center justify-between ">
            <p className="text-sm text-base-400">Order date</p>
            <p className="font-medium text-sm">24 November 2023</p>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm text-base-400">Email</p>
            <p className="font-medium text-sm">name@example.com</p>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm text-base-400">Phone</p>
            <p className="font-medium text-sm">+123 456 7890</p>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm text-base-400">Payment method</p>
            <div className="ml-2 flex items-center">
              <span className="text-error-500 mr-1">
                <FaIconByKeyName iconName={"FaCreditCard"} size="2x" />
              </span>
              <p className="font-medium text-sm">Credit Card</p>
            </div>
          </div>

          <div className="mb-2 flex items-center justify-between  ">
            <p className="text-sm text-base-400">Shipping address</p>
            <p className="font-medium text-xs">
              Master Para, Saheb Bazar, Rajshahi
            </p>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm text-base-400">Total price</p>
            <p className="font-bold text-sm text-base-content ">
              &#2547;7,191.00
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2">
            <button className="btn btn-sm btn-error btn-outline flex-grow">
              Cancel the order
            </button>
            <button className="btn btn-sm btn-primary flex-grow">
              Order details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
