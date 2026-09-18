import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("Active");

  function handleSubmit(e) {
    e.preventDefault();

    if (id.trim() === "" || name.trim() === "" || course.trim() === "") {
      alert("Please enter all the details.");
      return;
    }

    const student = {
      id: id.trim(),
      name: name.trim(),
      course: course.trim(),
      status: status
    };

    onAddStudent(student);

    setId("");
    setName("");
    setCourse("");
    setStatus("Active");
  }

  return (
    <section className="form-section">
      <h2>Add Student</h2>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student ID</label>
          <input
            type="text"
            value={id}
            placeholder="Example: IT004"
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter student name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            value={course}
            placeholder="Enter course"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button className="add-button" type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;
