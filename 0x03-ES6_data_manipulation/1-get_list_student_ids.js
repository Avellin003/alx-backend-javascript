const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  const newArray = students.map((student) => student.id);
  return newArray;
}

export default getListStudentIds