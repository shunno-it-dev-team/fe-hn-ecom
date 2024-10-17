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
import PersonalInfo from "../pages/private/profile-page/profile-info/PersonalInfo";
import OrderHistory from "../pages/private/order-history/OrderHistory";
import PaymentHistory from "../pages/private/payment-history/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <PublicLayout />
      </App>
    ),
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notifications-page",
        element: <NotificationPage />,
      },
      {
        path: "/cart-page",
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
        path: "/searching-page",
        element: <SearchingPage />,
      },
      {
        path: "/checkOut",
        element: <CheckOutPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            path: "personal-information",
            element: <PersonalInfo />,
          },
          {
            path: "order",
            element: <OrderHistory />,
          },
          {
            path: "payments",
            element: <PaymentHistory />,
          },
        ],
      },
    ],
  },
]);
