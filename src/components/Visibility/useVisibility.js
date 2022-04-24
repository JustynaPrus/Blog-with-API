import { useState, useCallback } from "react";

export const useVisibility = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);

  const checkIsChecked = useCallback(
    (id) => isChecked.includes(id),
    [isChecked]
  );

  const addCheckbox = (id) => {
    setIsChecked((prev) => [...prev, id]);
  };

  const handleDelete = () => {
    setDeletedItems(isChecked);
    setIsChecked([]);
  };

  return {
    isChecked,
    deletedItems,
    addCheckbox,
    checkIsChecked,
    handleDelete,
  };
};
