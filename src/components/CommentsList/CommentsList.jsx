import { useFilter } from "../Filter/useFilter";
import { useGetData } from "../GetData/useGetData";
import { Comment } from "../Atoms/Comment";
import { ListHeader } from "../ListHeader/ListHeader";

export const CommentsList = () => {
  const API = "https://jsonplaceholder.typicode.com/comments";

  const { data } = useGetData(API);
  const { filter, handleChange } = useFilter();

  return (
    <>
      <ListHeader onChange={handleChange} />
      {data.map(
        (item, index) =>
          (item.name.includes(filter) ||
            item.email.includes(filter) ||
            item.body.includes(filter)) && <Comment key={index} item={item} />
      )}
    </>
  );
};
