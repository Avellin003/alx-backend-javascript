export default function groceriesList() {
  const finalMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const lists = Array.from(Object.keys(object));

  lists.map((item) => finalMap.set(item, object[item]));
  return finalMap;
}
