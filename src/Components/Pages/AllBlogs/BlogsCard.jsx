const BlogsCard = ({ Blog }) => {
  const { title, category, shortDescription, picture } = Blog;
  const name = title.slice(0, 30);
  const text = shortDescription.slice(0, 70);
//   console.log(text);
  //   console.log(title);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Album" className="h-60 w-72 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}...</h2>
          <h4 ><span className="font-semibold">Category</span>: {category}</h4>
          <p>{text}...</p>
          <div className="card-actions justify-center">
            <button className="btn btn-success">Details</button>
            <button className="btn btn-neutral">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
