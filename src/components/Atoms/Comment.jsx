import { useState } from "react";
import { StyledLi, Wrapper, FlexBox } from "./Comment.styles";

export const Comment = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const { item } = props;

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isVisible ? (
        <Wrapper>
          <input onChange={handleCheckbox} type="checkbox" name="controlled" />
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
