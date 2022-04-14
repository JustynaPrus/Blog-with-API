import { useState } from "react";

export const Visibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const addCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleVisiblity = () => {
    if (isChecked) {
      setIsVisible(!isVisible);
    }
  };

  return { isVisible, handleClick, addCheckbox, handleVisiblity };
};
