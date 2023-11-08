import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const category = form.category.value;
    const date = form.date.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const picture = form.picture.value;
    const authorEmail = form.authorEmail.value;
    const blogOwner = form.blogOwner.value;
    const blogOwnerProfilePicture = form.blogOwnerProfilePicture.value;

    const longDesLengthArr = longDescription.trim().split(/\s+/);
    const longDescriptionWords = longDesLengthArr.length;
    console.log(longDescriptionWords);
    

    const newBlog = {
      title,
      category,
      date,
      shortDescription,
      longDescription,
      picture,
      authorEmail,
      longDescriptionWords,
      blogOwner,
      blogOwnerProfilePicture,

    };
    console.log(newBlog);

    fetch("https://bytes-of-thoughts-server.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          event.target.reset();
        }
      });
    navigate(location?.state ? location.state : "/");
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-stone-600 py-2">
        Add Blogs Here:
      </h2>
      <div className="hero bg-base-200 ">
        <div className="hero-content">
          <div className="card shadow-xl bg-base-100">
            <form onSubmit={handleAddBlog} className="card-body">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1st */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Blog Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Blog Category</span>
                    </label>
                    <select
                      className="select select-bordered"
                      type="text"
                      name="category"
                      id=""
                      required
                    >
                      <option value="">Select a Category</option>
                      <option value="Motivation">Motivation</option>
                      <option value="Software">Software</option>
                      <option value="Programming">Programming</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Tools">Tools</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Created Time</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      placeholder="Date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Author Email</span>
                    </label>
                    <input
                      type="email"
                      name="authorEmail"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Author Name</span>
                    </label>
                    <input
                      type="text"
                      name="blogOwner"
                      placeholder="Blog Owner Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* 2nd col */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Short Description</span>
                    </label>
                    <input
                      type="text"
                      name="shortDescription"
                      placeholder=" Short Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Long Description</span>
                    </label>
                    <input
                      type="text"
                      name="longDescription"
                      placeholder="Long Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Blog Picture Url</span>
                    </label>
                    <input
                      type="text"
                      name="picture"
                      placeholder="Picture URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Author Picture Url</span>
                    </label>
                    <input
                      type="text"
                      name="blogOwnerProfilePicture"
                      placeholder="Picture URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-9">
                    <input
                      type="submit"
                      value="Add Blog"
                      className="btn btn-neutral w-full"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
