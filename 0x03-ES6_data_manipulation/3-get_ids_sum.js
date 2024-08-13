export default function (students) {
  return students.reduce((acc, cur) => acc + cur.id, 0);
}
