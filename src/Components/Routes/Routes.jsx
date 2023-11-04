import MainLayouts from "../Layouts/MainLayouts";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
      ]
    },
  ]);

  export default router;