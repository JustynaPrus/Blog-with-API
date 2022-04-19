import { useVisibility } from "../Visibility/useVisibility";
import { useConsole } from "../Console/useConsole";
import { StyledLi, Wrapper, FlexBox } from "./Comment.styles";

export const Comment = (props) => {
  const { item, index } = props;
  const { isVisible, isChecked, handleClick, addCheckbox } = useVisibility();
  const { addToConsole } = useConsole(item);

  return (
    <>
      {isVisible ? (
        <Wrapper>
          <input
            type="checkbox"
            index={index}
            name={item.name}
            checked={isChecked[item.index]}
            id={item.id}
            onChange={() => addCheckbox(item.id)}
          />
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
