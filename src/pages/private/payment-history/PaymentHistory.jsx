// /* eslint-disable react/jsx-key */
// import React from "react";
// import { useTable } from "react-table";

// const PaymentHistory = () => {
//   const data = React.useMemo(
//     () => [
//       {
//         date: "22/06/23 08:08",
//         package: "Monthly",
//         paymentMethod: "Card payment",
//         amount: "₦2,500.00",
//         status: "Success",
//       },
//       {
//         date: "22/06/23 08:08",
//         package: "Monthly",
//         paymentMethod: "Card payment",
//         amount: "₦2,500.00",
//         status: "Failed",
//       },
//       {
//         date: "22/06/23 08:08",
//         package: "Monthly",
//         paymentMethod: "Card payment",
//         amount: "₦2,500.00",
//         status: "Failed",
//       },
//       {
//         date: "22/06/23 08:08",
//         package: "Monthly",
//         paymentMethod: "Card payment",
//         amount: "₦2,500.00",
//         status: "Success",
//       },
//     ],
//     []
//   );

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Date",
//         accessor: "date", // Accessor is the "key" in the data
//       },
//       {
//         Header: "Subscription package",
//         accessor: "package",
//       },
//       {
//         Header: "Payment method",
//         accessor: "paymentMethod",
//       },
//       {
//         Header: "Amount",
//         accessor: "amount",
//       },
//       {
//         Header: "Status",
//         accessor: "status",
//         Cell: ({ value }) => (
//           <span
//             className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
//               value === "Success"
//                 ? "bg-green-100 text-green-800"
//                 : "bg-red-100 text-red-800"
//             }`}
//           >
//             {value === "Success" ? (
//               <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
//             ) : (
//               <span className="inline-block w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
//             )}
//             {value}
//           </span>
//         ),
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <div className="overflow-x-auto mt-4">
//       <table
//         {...getTableProps()}
//         className="min-w-full table-auto text-sm text-left text-base-content/60 border-separate border-spacing-y-3"
//       >
//         <thead className="text-base font-semibold text-base-content/40">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-4 py-3 text-sm text-gray-500"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className="bg-white rounded-lg shadow-sm"
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-4 py-2 whitespace-nowrap text-base-content/60"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PaymentHistory;
