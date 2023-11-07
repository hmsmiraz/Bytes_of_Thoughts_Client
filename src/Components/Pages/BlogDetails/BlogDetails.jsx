import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";
import CommentList from "./CommentList";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const blogSingle = useLoaderData();
  const [allComments, setAllComments] = useState([]);
  //   console.log("User- ", userEmail);
  const {
    _id,
    title,
    category,
    shortDescription,
    picture,
    longDescription,
    authorEmail,
  } = blogSingle;
  //console.log("Author- ", authorEmail);

  //const detailsBtnShow = (userEmail === authorEmail);
  //   if (userEmail === authorEmail) {
  //     console.log("Update");
  //   } else {
  //     console.log("comment");
  //   }

  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => res.json())
      .then((data) => setAllComments(data));
  }, []);

  const filteredComment = allComments.filter(
    (Comment) => Comment.blogId == _id
  );
  //console.log(filteredComment);

  const handleComment = (event) => {
    event.preventDefault();
    const userEmail = user?.email;
    const blogId = _id;
    const form = event.target;
    const name = user?.displayName;
    const comment = form.comment.value;
    const photo = user?.photoURL;
    const newComment = { blogId, userEmail, name, comment, photo };
    //console.log(newComment);
    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Comment Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          event.target.reset();
        }
      });
  };
  return (
    <div>
      {/* blog details div */}
      <div>
        <h2 className="text-center text-3xl font-bold my-5 text-stone-500 ">
          Here is your Blog Details:
        </h2>
        <div>
          <div className="card bg-base-100 shadow-xl p-2 lg:p-10">
            <figure className="p-2 lg:p-10">
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
              <div className="card-actions justify-center">
                <div>
                  {userEmail === authorEmail ? (
                    <div>
                      <Link to={`/blogs/${_id}`}>
                        <button className="btn btn-info">Update</button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <form onSubmit={handleComment}>
                        <div className="flex flex-col md:flex-row justify-center items-center">
                          <div className="form-control">
                            <input
                              type="text"
                              name="comment"
                              placeholder="Type your Comment"
                              className="input input-bordered"
                              required
                            />
                          </div>
                          <div className="ml-2">
                            <input
                              type="submit"
                              value="Comment"
                              className="btn btn-neutral w-full"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* comments div */}
      <div className="overflow-x-auto my-5 p-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>User Photo</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {filteredComment.map((Commentss) => (
              <CommentList
                key={Commentss._id}
                Commentss={Commentss}
              ></CommentList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogDetails;
