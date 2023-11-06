import { Link } from "react-router-dom";

const BlogsCard = ({ Blog }) => {
  const { _id, title, category, shortDescription, picture } = Blog;
  const name = title.slice(0, 30);
  const text = shortDescription.slice(0, 70);
//   console.log(text);
  //   console.log(title);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" className="h-60 w-72 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}...</h2>
          <h4 ><span className="font-semibold">Category</span>: {category}</h4>
          <p>{text}...</p>
          <div className="card-actions justify-center">
            <Link to={`/allBlogs/${_id}`}>
            <button className="btn btn-success">Details</button>
            </Link>
            <Link to={`/allBlogs/${_id}`}>
            <button className="btn btn-neutral">Wishlist</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
