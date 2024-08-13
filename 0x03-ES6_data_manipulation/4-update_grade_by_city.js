const updateStudentGradeByCity = (students, city, grades) => {
  const gradesMap = new Map();
  grades.map((student) => gradesMap.set(student.studentId, student.grade));
  const studentsByCity = students.filter((student) => student.location === city);
  return studentsByCity.map((student) => ({
    ...student,
    grade: gradesMap.get(student.id) || 'N/A',
  }));
};

export default updateStudentGradeByCity;
