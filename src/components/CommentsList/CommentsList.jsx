import { Filter } from "../Filter/Filter";
import { GetData } from "../GetData/GetData";
import { Comment } from "../Atoms/Comment";
import { ListHeader } from "../ListHeader/ListHeader";
import { Visibility } from "../Visibility/Visibility";

export const CommentsList = () => {
  const API = "https://jsonplaceholder.typicode.com/comments";

  const { data } = GetData(API);
  const { filter, handleChange } = Filter();
  const { handleVisiblity } = Visibility();

  return (
    <>
      <ListHeader onChange={handleChange} onClick={handleVisiblity} />
      {data.map(
        (item) =>
          (item.name.includes(filter) ||
            item.email.includes(filter) ||
            item.body.includes(filter)) && <Comment key={item.id} item={item} />
      )}
    </>
  );
};
