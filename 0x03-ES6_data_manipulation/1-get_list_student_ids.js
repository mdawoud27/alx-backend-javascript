export default function (students) {
  if (!Array.isArray(students)) return [];
  return students.map((students) => students.id);
}
