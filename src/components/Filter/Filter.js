import { useState } from "react";

export const Filter = () => {
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return { filter, handleChange };
};
