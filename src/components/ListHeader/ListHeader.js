import { Wrapper, Box } from "./Header.styles";

export const Header = (props) => {
  const { setFilter } = props;

  return (
    <>
      <h1>Blog</h1>
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
    </>
  );
};
