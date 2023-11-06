import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const blogSingle = useLoaderData();
  const {
    _id,
    title,
    category,
    date,
    shortDescription,
    picture,
    longDescription,
    authorEmail,
  } = blogSingle;

  const handleUpdateBlog = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const category = form.category.value;
    const date = form.date.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const picture = form.picture.value;
    const authorEmail = form.authorEmail.value;

    const updateBlog = {
      title,
      category,
      date,
      shortDescription,
      longDescription,
      picture,
      authorEmail,
    };
    console.log(updateBlog);
    // send data to the server
    fetch(
      `http://localhost:5000/blogs/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateBlog),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Blog Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //navigate(location?.state ? location.state : "/");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-stone-600 py-2">
        Update the Blogs Here:
      </h2>
      <div className="hero bg-base-200 ">
        <div className="hero-content">
          <div className="card shadow-xl bg-base-100">
            <form onSubmit={handleUpdateBlog} className="card-body">
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
                      defaultValue={title}
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
                      defaultValue={category}
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
                      defaultValue={date}
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
                      defaultValue={authorEmail}
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
                      defaultValue={shortDescription}
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
                      defaultValue={longDescription}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Picture</span>
                    </label>
                    <input
                      type="text"
                      name="picture"
                      defaultValue={picture}
                      placeholder="Picture URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-9">
                <input
                  type="submit"
                  value="Update Blog"
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

export default UpdateBlog;
