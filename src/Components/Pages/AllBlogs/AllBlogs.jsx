import { BsSearch, BsFilterSquare } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";
const AllBlogs = () => {
  const Blogs = useLoaderData();
  // console.log(Blogs);
  const handleSearchByTitle = (event) => {
    event.preventDefault();
    const form = event.target;

    const searchByTitle = form.searchByTitle.value;
    console.log(searchByTitle);
  };
  const handleSearchByCategory = (event) => {
    event.preventDefault();
    const form = event.target;

    const searchByCategory = form.searchByCategory.value;
    console.log(searchByCategory);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* title search */}
        <div>
        <form
          onSubmit={handleSearchByTitle}
          className="flex items-center justify-center"
        >
          <div className="form-control">
            <input
              type="text"
              placeholder="Search By Title"
              name="searchByTitle"
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
        {/* category search */}
        <div>
        <form
          onSubmit={handleSearchByCategory}
          className="flex items-center justify-center"
        >
          <div className="form-control">
             <select
                      className="select select-bordered"
                      type="text"
                      name="searchByCategory"
                      required
                    >
                      <option value="">
                      Filter By Category
                      </option>
                      <option value="Motivation">Motivation</option>
                      <option value="Software">Software</option>
                      <option value="Programming">Programming</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Tools">Tools</option>
                    </select>
          </div>
          <div>
            <button className="ml-2 text-3xl" type="submit">
              <BsFilterSquare />
            </button>
          </div>
        </form>
        </div>
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
