/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
export default function appendToEachArrayValue(array, appendString) {
  const nnew = [];
  for (const idx of array) {
    nnew.push(appendString + idx);
  }

  return nnew;
}
