import MainLayouts from "../Layouts/MainLayouts";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/blogs"),
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
          path:'/allBlogs/:id',
          element: <BlogDetails></BlogDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
        },
        {
          path:'/blogs/:id',
          element: <UpdateBlog></UpdateBlog>,
          loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
        },
        {
          path:'/featuredBlogs',
          element: <FeaturedBlogs></FeaturedBlogs>,
          loader: () => fetch("http://localhost:5000/blogs"),
        },
        {
          path:'/wishlist',
          element: <Wishlist></Wishlist>,
          //loader: () => fetch("http://localhost:5000/wishlist"),
          //loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
        },
        {
          path:'/login',
          element: <Login></Login>,
        },
        {
          path:'/register',
          element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;