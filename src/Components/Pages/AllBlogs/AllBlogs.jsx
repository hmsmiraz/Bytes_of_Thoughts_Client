import { BsSearch } from "react-icons/bs";
const AllBlogs = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;

    const search = form.search.value;
    console.log(search)
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
        <h2>Our </h2>
      </div>
    </div>
  );
};

export default AllBlogs;
