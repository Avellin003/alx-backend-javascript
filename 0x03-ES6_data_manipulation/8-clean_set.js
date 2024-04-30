export default function cleanSet(set, startString) {
  /* eslint-disable array-callback-return */
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
