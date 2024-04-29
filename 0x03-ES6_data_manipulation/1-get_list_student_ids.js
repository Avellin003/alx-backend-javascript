export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const newArray = students.map((student) => student.id);
  return newArray;
}
