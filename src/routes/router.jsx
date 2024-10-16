import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/private/home-page/Home";
import NotificationPage from "../pages/private/notification-page/NotificationPage";
import CartPage from "../pages/private/cart-page/CartPage";
import ProductDetailsPage from "../pages/private/product-details-page/ProductDetailsPage";
import ContactUsPage from "../pages/private/contact-us-page/ContactUsPage";
import AboutPage from "../pages/private/about-page/AboutPage";
import SearchingPage from "../pages/private/searching-page/SearchingPage";
import ProductsByCategory from "../pages/public/product/ProductsByCategory";
import CheckOutPage from "../pages/private/checkout-page/CheckOutPage";
import ProfilePage from "./../pages/private/profile-page/ProfilePage";
import ErrorPage from "../pages/private/error-page/ErrorPage";
import OrderHistory from "../pages/private/order-history/OrderHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <PublicLayout />
      </App>
    ),
    errorElement: <ErrorPage />,
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
        path: "/product/category/:category",
        element: <ProductsByCategory />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/searchingPage",
        element: <SearchingPage />,
      },
      {
        path: "/checkOut",
        element: <CheckOutPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/order",
        element: <OrderHistory />,
      },
    ],
  },
]);
