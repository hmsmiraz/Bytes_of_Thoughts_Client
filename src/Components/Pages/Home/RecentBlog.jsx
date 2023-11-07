import { useLoaderData } from "react-router-dom";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlog = () => {
  const blogs = useLoaderData();
  const sortedData = blogs.slice(0, 6).sort((a, b) => new Date(b.date) - new Date(a.date));
  //console.log("sortedData", sortedData);

  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-4xl text-stone-600">
          Our Recent Blogs:{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
          {sortedData.map((Blog) => (
            <RecentBlogCard key={Blog._id} Blog={Blog}></RecentBlogCard>
          ))}
        </div>
    </div>
  );
};

export default RecentBlog;
