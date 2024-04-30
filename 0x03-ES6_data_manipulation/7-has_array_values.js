export default function hasValuesFromArray(set, array) {
  /* eslint-disable array-callback-return */
  let verd = true;
  array.map((y) => {
    if (!set.has(y)) {
      verd = false;
    }
  });
  
  return verd;
}
