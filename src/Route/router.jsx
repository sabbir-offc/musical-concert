import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Artist from "../Layouts/Artist";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/artist/:id",
        element: <Artist></Artist>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoutes>
            <EventDetails></EventDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
