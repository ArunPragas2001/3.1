function StudentCard({ id, name, course, status }) {
  return (
    <div className="student-card">
      <div className="card-top">
        <span className="student-id">{id}</span>
        <span className={status === "Active" ? "status-badge active" : "status-badge inactive"}>
          {status}
        </span>
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Course:</strong> {course}</p>
      </div>
    </div>
  );
}

export default StudentCard;
