//import Swal from "sweetalert2";

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const blogSingle = useLoaderData();

  const { _id, title, category, shortDescription, picture, longDescription } =
    blogSingle;
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-5 text-stone-500 ">
        Here is your Blog Details:
      </h2>
      <div>
        <div className="card bg-base-100 shadow-xl p-10">
          <figure className="p-10">
            <img src={picture} alt="blog" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <h4>
              <span className="font-semibold text-lg">Brief:</span>{" "}
              {shortDescription}
            </h4>
            <p>
              <span className="font-semibold text-base">Details:</span>{" "}
              {longDescription}
            </p>
            <div className="card-actions justify-end">
              <div>
                <Link to={"/"}>
                  <button className="btn btn-info ">Update</button>
                </Link>
              </div>
              <div>
                <button className="btn btn-accent">Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
