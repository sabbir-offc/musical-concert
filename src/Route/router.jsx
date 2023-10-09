import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Artist from "../Layouts/Artist";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
import EventSubmit from "../Pages/EventSubmit/EventSubmit";
import Profile from "../Pages/Profile/Profile";
import Error from "../Pages/Error/Error";
import Cart from "../Pages/Cart/Cart";
import About from "../Pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        path: "/about",
        element: <About></About>,
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
      {
        path: "/event-submit",
        element: (
          <PrivateRoutes>
            <EventSubmit></EventSubmit>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
