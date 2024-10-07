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
import LoginPage from "../pages/public/auth/login-page/LoginPage";
import RegisterPage from "../pages/public/auth/register-page/RegisterPage";
import ForgotPassword from "../pages/public/auth/forgot-password/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <PublicLayout />
      </App>
    ),
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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
    ],
  },
]);
