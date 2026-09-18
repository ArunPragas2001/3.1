import StudentCard from "./StudentCard";

function StudentList({ students }) {
  if (students.length === 0) {
    return <p className="empty-message">No students added yet.</p>;
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          course={student.course}
          status={student.status}
        />
      ))}
    </div>
  );
}

export default StudentList;
