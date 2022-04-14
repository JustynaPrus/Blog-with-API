import { GetData } from "../GetData/GetData";
import { Comment } from "../Atoms/Comment";

export const CommentsList = () => {
  const API = "https://jsonplaceholder.typicode.com/comments";

  const { data } = GetData(API);

  return (
    <>
      {data.map((item) => (
        <Comment key={item.id} item={item} />
      ))}
    </>
  );
};
