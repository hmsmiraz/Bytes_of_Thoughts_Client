const CommentList = ({ Commentss }) => {
  const { userEmail, name, comment, photo } = Commentss;
  // console.log(name);
  return (
    <tr>
     
      <td>{name}</td>
      <td>
        <img src={photo} alt="" className="h-8 w-8 rounded-2xl" />
      </td>
      <td>{comment}</td>
    </tr>
  );
};

export default CommentList;
