import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {deleteCampus} = props; 

  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <img src ={campus.imageURL} alt= {"campus"}style ={{resizeMode: "contain",
            height: 100,
            width: 100}}/>
            <h1>{campus.name}</h1>
          </Link>
         
          <button onClick={() => deleteCampus(campus.id)}>X</button>
        </div>
      )
      )}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;