import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
/**Hooks can only be called inside of the body of a function component. */
function EmployeeCard({employee, deleteEmp}){

    const navigate=useNavigate(); // return you function reference
    function passEmp(employee){
        navigate('/updateemployeesecure',{ state: { employee } }); // to navigate to defined route
    }
  
    return(
    <div className="card mb-3" style={{maxWidth: "540px"}}>
    <div className="row g-0">
        <div className="col-md-4">
        <img src={employee.profilePic} className="img-fluid rounded-start" alt={employee.empName} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h6 className="card-title text-success"><span>{employee.empName.toUpperCase()}</span>
                <span>(#{employee.id})</span></h6>
                <h6>{employee.profile}</h6>
                <p className="card-text">{employee.empDescription}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span>joined on </span><b>{employee.joiningDate}</b></li>
                <li className="list-group-item"><span>working in </span><b>{employee.empDepartment}</b></li>
                <li className="list-group-item"><span>total </span><b>{employee.empExperience}</b><span> years of experience</span></li>
            </ul>
            <div className="card-body">
                <Button  color="secondary" className="mx-2" variant="contained" to={'/updateemployee/'+employee.id}
                component={Link}
                startIcon={<EditIcon></EditIcon>} >EDIT</Button>
                <Button onClick={()=>deleteEmp(employee.id)} color="error" 
                variant="contained" startIcon={<DeleteIcon></DeleteIcon>}>DELETE</Button>
       {/*  {  <button onClick={()=>passEmp(employee)}>EDIT</button>  } */}
            </div>
        </div>
    </div>
    </div>
    );
}

export default EmployeeCard;

