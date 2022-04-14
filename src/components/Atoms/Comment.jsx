import { Visibility } from "../Visibility/Visibility";
import { Console } from "../Console/Console";
import { StyledLi, Wrapper, FlexBox } from "./Comment.styles";

export const Comment = (props) => {
  const { isVisible, handleClick, addCheckbox } = Visibility();
  const { item } = props;
  const { addToConsole } = Console(item);

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
            <button onClick={addToConsole}>Zaloguj</button>
          </FlexBox>
        </Wrapper>
      ) : null}
    </>
  );
};
