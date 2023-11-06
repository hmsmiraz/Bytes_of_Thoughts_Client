import { useState, useEffect } from "react";
import Axios from "axios";

const FeaturedBlogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get("http://localhost:5000/blogs");
      setPosts(response.data);
    }

    fetchPosts();
  }, []);
  console.log(posts);
  const longDescription = posts.find(
    (post) => post.longDescription == longDescription
  );
  console.log(longDescription);
  return <div></div>;
};

export default FeaturedBlogs;
