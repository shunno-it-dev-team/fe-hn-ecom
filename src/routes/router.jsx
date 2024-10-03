import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PublicLayout from "../layouts/PublicLayout";
import NotificationPage from "../pages/notificationPage/NotificationPage";
import CartPage from "../pages/cartPage/CartPage";
import ProductDetailsPage from "../pages/productDetailsPage/ProductDetailsPage";
import ContactUsPage from "../pages/contactUsPage/ContactUsPage";

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
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
    ],
  },
]);
