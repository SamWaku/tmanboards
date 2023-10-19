import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import AdminHome from "./pages/adminHome";

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminHome />,
    }
  ]);
  
  export default AppRouter;
  