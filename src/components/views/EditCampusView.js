


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
import { student } from '../../store/reducers';


const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const EditCampusView = (props) => {

  const {handleChange, handleSubmit,campus} = props;

 
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Update Student Info
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
          <input type="text" name="firstname" value={campus.name} onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
          <input type="text" name="lastname" value={campus.address} onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default EditCampusView;