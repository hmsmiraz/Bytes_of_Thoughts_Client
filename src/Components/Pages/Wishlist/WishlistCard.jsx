import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishlistCard = ({ blogs, blogAll, setBlogAll }) => {
  const { _id, title, category, shortDescription, picture } = blogs;
  const name = title.slice(0, 30);
  const text = shortDescription.slice(0, 120);

  const handleRemove = _id => {
    //console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://bytes-of-thoughts-server.vercel.app/wishlist/${_id}`, {
            method: 'DELETE'
          })
            .then((res) => res.json())
            .then((data) => {
              //console.log(_id)
              //console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Success!",
                  text: "Blog Deleted Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                const remaining = blogAll.filter((item) => item._id !== _id);
                setBlogAll(remaining);
              }
            });
        }
      })
      // .then((error) => {
      //   console.log(error);
      // });
  };
  //console.log(title);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
            className="h-40 w-72 rounded-xl mt-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="badge badge-info">{category}</p>
          <p>{text}...</p>
          <div className="card-actions justify-center">
          <Link to={`/allBlogs/${_id}`}>
              <button className="btn bg-emerald-600 text-white">Details</button>
            </Link>
            <button
              onClick={() => handleRemove(_id)}
              className="btn bg-red-600 text-white"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
