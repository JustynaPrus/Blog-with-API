import { useState } from "react";
import { useGetData } from "../GetData/useGetData";

export const useVisibility = () => {
  const { data } = useGetData();

  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );
  const [selected, setSelected] = useState([]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  console.log(data);

  const addCheckbox = (id, position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    console.log(position);
    console.log(id);
    setSelected((selected) => [...selected, id]);
    console.log(selected);
  };

  return {
    isChecked,
    isVisible,
    selected,
    handleClick,
    addCheckbox,
  };
};
