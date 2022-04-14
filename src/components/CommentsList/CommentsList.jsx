import { useState } from "react";
import { GetData } from "../GetData/GetData";
import { Comment } from "../Atoms/Comment";
import { Wrapper, Box } from "../ListHeader/ListHeader.styles";

export const CommentsList = () => {
  const API = "https://jsonplaceholder.typicode.com/comments";

  const { data } = GetData(API);

  const [filter, setFilter] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search for Pokemon"
        />
      </form>
      <button>Usuń zaznaczone</button>
      <Wrapper>
        <p>Checkbox</p>
        <Box>
          <p>Id</p>
          <p>Name</p>
          <p>Mail</p>
          <p>Body</p>
        </Box>
        <p>Action</p>
      </Wrapper>
      {data.map(
        (item) =>
          (item.name.includes(filter) ||
            item.email.includes(filter) ||
            item.body.includes(filter)) && <Comment key={item.id} item={item} />
      )}
    </>
  );
};
