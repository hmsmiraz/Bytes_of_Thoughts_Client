import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  const blogs = useLoaderData();
  const [posts, setPosts] = useState(blogs);

  const sortedData = posts.slice().sort((a, b) => a.longDescriptionWords - b.longDescriptionWords);

  // function sortByLongDescriptionWordCount(posts) {
  //   return posts.sort(
  //     (a, b) => b.longDescription - a.longDescription
  //   );
  // }
  // console.log(sortByLongDescriptionWordCount(posts));

  // useEffect(() => {
  //   const sortedPosts = sortByLongDescriptionWordCount(blogs);
  //   setPosts(sortedPosts);
  // }, [blogs]);

  return (
    <ul>
      {sortedData.map((post) => (
        <li key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeaturedBlogs;
