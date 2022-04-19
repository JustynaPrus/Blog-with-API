import { useState } from "react";

export const useFilter = () => {
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return { filter, handleChange };
};
