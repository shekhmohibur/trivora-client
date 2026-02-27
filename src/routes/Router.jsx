import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },

      // 🔓 Public-only routes
      {
        Component: PublicRoute,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },

      // 🔐 Private routes
      {
        Component: PrivateRoute,
        children: [
          { path: "dashboard", Component: Dashboard },
        ],
      },
    ],
  },
]);

export default Router;