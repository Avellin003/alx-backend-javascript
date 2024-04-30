const groceriesList = () => {
  const result = new Map();
  const objects = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objects)) {
    result.set(key, objects[key]);
  }
  return result;
};

export default groceriesList;
