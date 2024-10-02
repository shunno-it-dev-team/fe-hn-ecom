import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PublicLayout from "../layouts/PublicLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
