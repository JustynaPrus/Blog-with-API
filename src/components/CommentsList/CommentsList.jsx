import { useFilter } from "../Filter/useFilter";
import { useGetData } from "../GetData/useGetData";
import { Comment } from "../Atoms/Comment";
import { ListHeader } from "../ListHeader/ListHeader";
import { useVisibility } from "../Visibility/useVisibility";

export const CommentsList = () => {
  const API = "https://jsonplaceholder.typicode.com/comments";

  const { data } = useGetData(API);
  const { filter, handleChange } = useFilter();
  const { deletedItems, checkIsChecked, addCheckbox, handleDelete } =
    useVisibility();

  return (
    <>
      <ListHeader handleChange={handleChange} handleDelete={handleDelete} />
      {data.map((item) =>
        deletedItems.find((el) => el === item.id)
          ? null
          : (item.name.includes(filter) ||
              item.email.includes(filter) ||
              item.body.includes(filter)) && (
              <Comment
                key={item.id}
                item={item}
                isChecked={checkIsChecked(item.id)}
                handleAddToCheckedItems={addCheckbox}
              />
            )
      )}
    </>
  );
};
