import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from './../pages/private/homePage/Home';
import NotificationPage from './../pages/private/notificationPage/NotificationPage';
import CartPage from './../pages/private/cartPage/CartPage';
import ProductDetailsPage from './../pages/private/productDetailsPage/ProductDetailsPage';
import ContactUsPage from './../pages/private/contactUsPage/ContactUsPage';
import AboutPage from './../pages/private/aboutPage/AboutPage';
import SearchingPage from "../pages/private/searchingPage/SearchingPage";
import LoginPage from './../pages/public/loginPage/LoginPage';
import RegisterPage from "../pages/public/registerPage/RegisterPage";
import ForgotPassword from "../pages/public/forgotPassword/ForgotPassword";

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
        element: <LoginPage/>,
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
