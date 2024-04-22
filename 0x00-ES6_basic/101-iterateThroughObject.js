/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  let isFirst = true;

  for (const employee of reportWithIterator) {
    if (!isFirst) {
      output += ' | ';
    }
    output += `${employee}`;
    isFirst = false;
  }

  return output;
}
