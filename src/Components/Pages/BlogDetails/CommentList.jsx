const CommentList = ({ Commentss }) => {
  const { userEmail, name, comment } = Commentss;
  // console.log(name);
  return (
    <tr>
      <td>{userEmail}</td>
      <td>{name}</td>
      <td>{comment}</td>
    </tr>
  );
};

export default CommentList;
