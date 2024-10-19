// import { useState } from "react";

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       title: "Order Shipped",
//       message: "Your order #12345 has been shipped and is on its way!",
//       time: "2 hours ago",
//       read: false,
//     },
//     {
//       id: 2,
//       title: "New Sale",
//       message: "Big sale on electronics! Get up to 50% off.",
//       time: "1 day ago",
//       read: true,
//     },
//     {
//       id: 3,
//       title: "Delivery Update",
//       message: "Your order #12344 is out for delivery.",
//       time: "3 days ago",
//       read: false,
//     },
//   ]);

//   const markAsRead = (id) => {
//     setNotifications((prev) =>
//       prev.map((notification) =>
//         notification.id === id ? { ...notification, read: true } : notification
//       )
//     );
//   };

//   const deleteNotification = (id) => {
//     setNotifications((prev) =>
//       prev.filter((notification) => notification.id !== id)
//     );
//   };

//   return (
//     <div className="min-h-screen bg-base-100 p-4">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4">Notifications</h1>

//         {notifications.length === 0 ? (
//           <p className="text-gray-500">You have no notifications.</p>
//         ) : (
//           <div className="space-y-4">
//             {notifications.map((notification) => (
//               <div
//                 key={notification.id}
//                 className={`card shadow-md p-4 ${
//                   notification.read ? "bg-base-200" : "bg-base-100"
//                 }`}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h2 className="font-bold text-lg">{notification.title}</h2>
//                     <p className="text-gray-600">{notification.message}</p>
//                     <p className="text-sm text-gray-400">{notification.time}</p>
//                   </div>
//                   <div className="space-x-4  ">
//                     {!notification.read && (
//                       <button
//                         className="btn btn-sm btn-primary my-2"
//                         onClick={() => markAsRead(notification.id)}
//                       >
//                         Mark as Read
//                       </button>
//                     )}
//                     <button
//                       className="btn btn-sm btn-error"
//                       onClick={() => deleteNotification(notification.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationPage;
