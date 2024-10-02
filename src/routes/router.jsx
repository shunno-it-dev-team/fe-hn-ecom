import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PublicLayout from "../layouts/PublicLayout";
import NotificationPage from "../pages/notificationPage/NotificationPage";
import CartPage from "../pages/cartPage/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notificationPage",
        element: <NotificationPage />,
      },
      {
        path: "/cartPage",
        element: <CartPage />,
      },
    ],
  },
]);
