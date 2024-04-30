export default function updateStudentGradeByCity(lists, city, newGrade) {
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-prototype-builtins */
  return lists
    .filter((object) => object.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
