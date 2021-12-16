import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent, editStudent} = props;

  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <img src ={student.imageURL} alt= {"student"}style ={{resizeMode: "contain",
          height: 200,
            width: 250}}/>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
            <h4>{student.gpa}</h4>
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          <button onClick={() => editStudent(student)}>Edit</button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};


export default AllStudentsView;