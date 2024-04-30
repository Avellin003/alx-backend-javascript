export default function getStudentIdsSum(lists) {
  return lists.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
