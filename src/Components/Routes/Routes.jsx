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
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://bytes-of-thoughts-server.vercel.app/blogs"),
      },
      {
        path: "/addBlogs",
        element: (
          <PrivateRoutes>
            <AddBlogs></AddBlogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
        loader: () =>
          fetch("https://bytes-of-thoughts-server.vercel.app/blogs"),
      },
      {
        path: "/allBlogs/:id",
        element: (
          <PrivateRoutes>
            <BlogDetails></BlogDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bytes-of-thoughts-server.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "/blogs/:id",
        element: (
          <PrivateRoutes>
            <UpdateBlog></UpdateBlog>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bytes-of-thoughts-server.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "/featuredBlogs",
        element: (
          <PrivateRoutes>
            <FeaturedBlogs></FeaturedBlogs>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://bytes-of-thoughts-server.vercel.app/blogs"),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoutes>
            <Wishlist></Wishlist>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
