import { useConsole } from "../Console/useConsole";
import { StyledLi, Wrapper, FlexBox } from "./Comment.styles";
import { useState } from "react";

export const Comment = (props) => {
  const { item, isChecked, handleAddToCheckedItems } = props;

  const { addToConsole } = useConsole(item);

  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible ? (
        <Wrapper>
          <input
            type="checkbox"
            name={item.name}
            checked={isChecked}
            id={item.id}
            onChange={() => handleAddToCheckedItems(item.id)}
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
