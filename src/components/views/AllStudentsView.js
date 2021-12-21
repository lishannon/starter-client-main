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
  
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          
          <button onClick={() => deleteStudent(student.id)}>X</button>
          {/* <Link to={`/editStudent`}>
            <button onClick={() => editStudent(student)}>Edit</button>
          </Link> */}
          <Link to={`/student/edit/`+ student.id}>
            <button onClick={() => editStudent(student)}>Edit</button>
          </Link>
          
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