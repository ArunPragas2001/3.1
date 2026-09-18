import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: "IT001",
      name: "Kamal Perera",
      course: "Information Technology",
      status: "Active"
    },
    {
      id: "IT002",
      name: "Nimal Fernando",
      course: "Computer Science",
      status: "Active"
    },
    {
      id: "IT003",
      name: "Saman Silva",
      course: "Information Technology",
      status: "Inactive"
    }
  ]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Student Management System</h1>
        <p>React Practical</p>
      </header>

      <main className="main-content">
        <StudentForm onAddStudent={addStudent} />

        <section className="students-section">
          <h2>Student List</h2>
          <StudentList students={students} />
        </section>
      </main>

      <footer className="footer">
        <p>@ Student Management System</p>
      </footer>
    </div>
  );
}

export default App;
