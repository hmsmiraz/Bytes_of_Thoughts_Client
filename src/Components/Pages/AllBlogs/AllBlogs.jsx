import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";
import { useState } from "react";
const AllBlogs = () => {
  const [searchByTitle, setSearchByTitle] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");
  const Blogs = useLoaderData();

  const handleSearchByTitle = (event) => {
    event.preventDefault();

    setSearchByTitle(event.target.value);
  };

  const handleSearchByCategory = (event) => {
    event.preventDefault();

    setFilterByCategory(event.target.value);
  };

  const filterBlogs = () => {
    const filteredBlogs = Blogs.filter((blog) => {
      const titleMatches = blog.title
        .toLowerCase()
        .includes(searchByTitle.toLowerCase());

      const categoryMatches = filterByCategory
        ? blog.category === filterByCategory
        : true;

      return titleMatches && categoryMatches;
    });

    return filteredBlogs;
  };

  const filteredBlogs = filterBlogs();

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
                value={searchByTitle}
                onChange={handleSearchByTitle}
              />
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
                name="filterByCategory"
                required
                value={filterByCategory}
                onChange={handleSearchByCategory}
              >
                <option value="">Filter By Category</option>
                <option value="Motivation">Motivation</option>
                <option value="Software">Software</option>
                <option value="Programming">Programming</option>
                <option value="Web Development">Web Development</option>
                <option value="Tools">Tools</option>
              </select>
            </div>
          </form>
        </div>
        {/* clear
        <div>
          <button
            className="btn ml-2 text-xl"
            type="reset"
            onClick={() => {
              setSearchByTitle([]);
              setFilterByCategory([]);
            }}
          >
            Clear
          </button>
        </div> */}
      </div>
      <div className="my-5">
        {/* <h2 className="font-bold text-3xl text-center">Our All Blogs </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
          {filteredBlogs.map((Blog) => (
            <BlogsCard key={Blog._id} Blog={Blog}></BlogsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
