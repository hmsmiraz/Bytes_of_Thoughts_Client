import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProviders";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  //const wishlistBlogs = useLoaderData();
  const [blogAll, setBlogAll] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const url = `http://localhost:5000/wishlist?email=${user?.email}`
  useEffect(()=>{
    fetch(url, {credentials: 'include'})
    .then(res=>res.json())
    .then(data=>setBlogAll(data))
  },[url])
  // const filteredWishlist = blogAll.filter(
  //   (wishlistBlog) => wishlistBlog.email == email
  // );
  return (
    <div>
      <div className="my-10">
        <h2 className="text-center text-3xl font-bold my-5 text-stone-500">
          This is Your Wishlist Blogs:
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-2">
        {blogAll.map((blogs) => (
          <WishlistCard
            key={blogs._id}
            blogs={blogs}
            blogAll={blogAll}
            setBlogAll={setBlogAll}
          ></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
