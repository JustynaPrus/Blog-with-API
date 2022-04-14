import { Wrapper, Box } from "./ListHeader.styles";

export const ListHeader = () => {
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
    </>
  );
};
