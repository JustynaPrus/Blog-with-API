export const useConsole = (item) => {
  const addToConsole = () => {
    console.log(item);
  };

  return { addToConsole };
};
