
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk, 
    fetchCampusThunk } from '../../store/thunks';
import { campus, student } from '../../store/reducers';
import axios from 'axios';
import { editCampus } from '../../store/actions/actionCreators';


class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", 
            address: "", 
            campusId: null, 
            redirect: false, 
            redirectId: null
        };
    }
    
    componentWillUnmount() {
        this.props.fetchCampus(this.props.match.params.id);
        
    }    

    handleChange = event => {
        
      this.setState({
        [event.target.name]: event.target.value
      });
    }


    handleSubmit = async event => {
        event.preventDefault();
    
        await this.props.editStudent(student);
    }


    render() {
        if(this.state.redirect) {
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
          }
        return (
            
          <EditStudentView 
            campus={this.props}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    })
}


export default connect(null, mapDispatch)(EditCampusContainer);