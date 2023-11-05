import { BsSearch } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";
const AllBlogs = () => {
  const Blogs = useLoaderData();
  // console.log(Blogs);
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;

    const search = form.search.value;
    console.log(search);
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center"
        >
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="input input-bordered w-24 md:w-48"
            />
          </div>
          <div>
            <button className="ml-2 text-3xl" type="submit">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="my-5">
        {/* <h2 className="font-bold text-3xl text-center">Our All Blogs </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
          {Blogs.map((Blog) => (
            <BlogsCard key={Blog._id} Blog={Blog}></BlogsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
