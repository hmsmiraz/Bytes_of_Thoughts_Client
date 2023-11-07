import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const RecentBlogCard = ({ Blog}) => {
    const { user } = useContext(AuthContext);
  const email = user?.email;
  //console.log(email)
  const { _id, title, category, shortDescription, picture } = Blog;
  const name = title.slice(0, 30);
  const text = shortDescription.slice(0, 70);
  const handleWishlist = () => {
    const addBlogWishlist = {
      email,
      title,
      category,
      shortDescription,
      picture,
    };
    //console.log(addBlogWishlist)
    fetch("http://localhost:5000/wishlist", {
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
              <button className="btn bg-emerald-600 text-white">Details</button>
            </Link>

            <button onClick={handleWishlist} className="btn btn-neutral">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RecentBlogCard;