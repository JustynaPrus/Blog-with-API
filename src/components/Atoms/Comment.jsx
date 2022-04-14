import { Visibility } from "../Visibility/Visibility";
import { StyledLi, Wrapper, FlexBox } from "./Comment.styles";

export const Comment = (props) => {
  const { isVisible, handleClick, addCheckbox } = Visibility();
  const { item } = props;

  return (
    <>
      {isVisible ? (
        <Wrapper>
          <input onChange={addCheckbox} type="checkbox" name="controlled" />
          <StyledLi key={item.id}>
            <p>{item.id}.</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </StyledLi>
          <FlexBox>
            <button onClick={handleClick}>Usuń</button>
            <button>Zaloguj</button>
          </FlexBox>
        </Wrapper>
      ) : null}
    </>
  );
};
