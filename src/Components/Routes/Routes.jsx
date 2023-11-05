import MainLayouts from "../Layouts/MainLayouts";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path:'/addBlogs',
          element: <AddBlogs></AddBlogs>,
        },
        {
          path:'/allBlogs',
          element: <AllBlogs></AllBlogs>,
          loader: () => fetch("http://localhost:5000/blogs"),
        },
        {
          path:'/featuredBlogs',
          element: <FeaturedBlogs></FeaturedBlogs>,
        },
        {
          path:'/wishlist',
          element: <Wishlist></Wishlist>,
        },
      ]
    },
  ]);

  export default router;