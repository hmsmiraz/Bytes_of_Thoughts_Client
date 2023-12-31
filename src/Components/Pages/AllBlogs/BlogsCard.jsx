import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

const BlogsCard = ({ Blog }) => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  //console.log(email)
  const { _id, title, category, shortDescription, picture } = Blog;
  const name = title.slice(0, 30);
  const text = shortDescription.slice(0, 70);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const blogId = _id;
  // console.log(blogId);
  //   console.log(title);
  const handleWishlist = () => {
    const addBlogWishlist = {
      blogId,
      email,
      title,
      category,
      shortDescription,
      picture,
    };
    //console.log(addBlogWishlist)
    fetch("https://bytes-of-thoughts-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBlogWishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog Add to Wishlist Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      {isLoading ? (
        <Skeleton className="card bg-base-100 shadow-xl">
          <figure>
            <Skeleton width="72" height="60" className="rounded-xl mt-2" />
          </figure>

          <Skeleton className="card-body">
            <Skeleton
              width="100%"
              height="20px"
              className="card-title font-bold"
            />

            <Skeleton width="100%" height="15px" className="font-semibold">
              Category
            </Skeleton>

            <Skeleton width="100%" height="30px" className="mb-2" />

            <Skeleton
              width="50%"
              height="20px"
              className="btn bg-emerald-600 text-white"
            />
            <Skeleton width="50%" height="20px" className="btn btn-neutral" />
          </Skeleton>
        </Skeleton>
      ) : (
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={picture}
              alt="Album"
              className="h-60 w-72 rounded-xl mt-2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{name}...</h2>
            <h4>
              <span className="font-semibold">Category</span>: {category}
            </h4>
            <p>{text}...</p>
            <div className="card-actions justify-center">
              <Link to={`/allBlogs/${_id}`}>
                <button className="btn bg-emerald-600 text-white">
                  Details
                </button>
              </Link>

              <button onClick={handleWishlist} className="btn btn-neutral">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsCard;
