import { useState } from "react";
import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  const blogs = useLoaderData();
  const [posts, setPosts] = useState(blogs);

  const sortedData = posts
    .slice()
    .sort((a, b) => a.longDescriptionWords - b.longDescriptionWords);

  const dataWithSerialNumbers = sortedData.map((item, index) => ({
    ...item,
    serialNumber: index + 1,
  }));
  //console.log(dataWithSerialNumbers);
  const columns = [
    {
      name: "Serial Number",
      selector: "serialNumber", 
      sortable: true,
    },
    {
      name: "Blog Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Blog Owner",
      selector: "blogOwner", 
    },
    {
      name: "Blog Owner Profile Picture",
      cell: (row) => (
        <img src={row.blogOwnerProfilePicture} alt={row.blogOwner} width="40" style={{ borderRadius: '50%' }} />
      ),
      sortable: false,
    },
    {
      name: "Words in Long Description",
      selector: "longDescriptionWords",
      sortable: true,
    },
  
  ];

  return (
    <div>
      <DataTable
        title="Blog Posts"
        columns={columns}
        data={dataWithSerialNumbers}
      />
    </div>
  );
};

export default FeaturedBlogs;
