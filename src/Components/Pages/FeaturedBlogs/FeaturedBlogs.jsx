
import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  const blogs = useLoaderData();

  const sortedData = blogs
    .slice(0, 10)
    .sort((a, b) => b.longDescriptionWords - a.longDescriptionWords);

  const dataWithSerialNumbers = sortedData.map((item, index) => ({
    ...item,
    serialNumber: index + 1,
  }));

  // const divElement = document.querySelector("div");

  // if (divElement.hasAttribute("sortActive")) {
  //   divElement.removeAttribute("sortActive");
  // }
  

  const columns = [
    {
      name: "Serial Number",
      selector: (row) => row["serialNumber"],
      sortable: true,
    },
    {
      name: "Blog Title",
      selector: (row) => row["title"],
      sortable: true,
    },
    {
      name: "Blog Owner",
      selector: (row) => row["blogOwner"],
    },
    {
      name: "Blog Owner Profile Picture",
      selector: (row) => (
        <img
          src={row.blogOwnerProfilePicture}
          alt={row.blogOwner}
          width="40"
          style={{ borderRadius: "50%" }}
        />
      ),
      sortable: false,
    },
    {
      name: "Words in Long Description",
      selector: (row) => row["longDescriptionWords"],
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
