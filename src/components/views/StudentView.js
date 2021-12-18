import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student} = props;

  if (student.campus == null) {
    return (
      <div>
        <div style ={{display: 'flex', justifyContent: 'center', textAlign:'center'}}>
          <img src ={student.imageURL} alt= {"student"}style ={{resizeMode: "contain",
              height: 200, width: 250}}/>
        </div>
        <div style ={{textAlign:'center'}}>
          <h1>Name: {student.firstname + " " + student.lastname}</h1>
          <h2>Email Address: {student.email} </h2>
          <h3>Gpa: {student.gpa} </h3>
          <h4>Doesn't attend a campus</h4>
        
      </div>
    </div>
    );
  }

  return (
    <div>
      <div style ={{display: 'flex', justifyContent: 'center', textAlign:'center'}}>
        <img src ={student.imageURL} alt= {"student"}style ={{resizeMode: "contain",
            height: 200, width: 250}}/>
      </div>
      <div style ={{textAlign:'center'}}>
        <h1>Name: &nbsp;{student.firstname + " " + student.lastname}</h1>
        <h2>Email Address:&nbsp; {student.email} </h2>
        <h3>Gpa: &nbsp;{student.gpa} </h3>
        <h4>University:&nbsp;
        <Link to={`/campus/${student.campus.id}`}>
          {student.campus.name}
        </Link></h4>
        
        
      </div>
    </div>
  );

};

export default StudentView;