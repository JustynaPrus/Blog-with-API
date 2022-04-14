import { Wrapper, Box, FlexBox } from "./ListHeader.styles";

export const ListHeader = (props) => {
  return (
    <>
      <h1>Blog</h1>
      <FlexBox>
        <form>
          <input
            {...props}
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search"
          />
        </form>
        <button {...props}>Usuń zaznaczone</button>
      </FlexBox>
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
