export default function getStudentsByLocation(object, city) {
  return object.filter((obj) => obj.location === city);
}
