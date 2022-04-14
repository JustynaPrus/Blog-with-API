import { StyledLi, Wrapper } from "./Comment.styles";

export const Comment = (props) => {
  const { item } = props;

  return (
    <>
      <Wrapper>
        <StyledLi key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.body}</p>
        </StyledLi>
        <div>
          <button>Usuń</button>
          <button>Zaloguj</button>
        </div>
      </Wrapper>
    </>
  );
};
