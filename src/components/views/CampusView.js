

const CampusView = (props) => {
  const {campus} = props;

  if (!campus.students.length) {
    return (
    <div>
      <img src ={campus.imageURL} alt= {"campus"}style ={{resizeMode: "contain",
     height: 100,
     width: 100}}/>
      <h1>{campus.name}</h1>
      <h3>{campus.address}</h3>
      <p>{campus.description}</p>

      <p>Currently, no student attend {campus.name}</p>
    </div>
    );
  }

  return (
    <div> 
      <img src ={campus.imageURL} alt= {"campus"}style ={{resizeMode: "contain",
     height: 100,
     width: 100}}/>
      <h1>{campus.name}</h1>
      <h3>{campus.address}</h3>
      <p>{campus.description}</p>
      <ul>
      
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })}


      </ul>
    </div>
  );

};

export default CampusView;