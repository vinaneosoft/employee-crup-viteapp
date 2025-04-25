import { Link, useNavigate } from "react-router-dom";

/**Hooks can only be called inside of the body of a function component. */
function EmployeeCard({employee}){

    const navigate=useNavigate(); // return you function reference
    function passEmpId(empId){
        navigate('/updateemployeesecure',{ state: { empId } }); // to navigate to defined route
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
                <span>(#{employee.empId})</span></h6>
                <h6>{employee.profile}</h6>
                <p className="card-text">{employee.empDescription}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span>joined on </span><b>{employee.joiningDate}</b></li>
                <li className="list-group-item"><span>working in </span><b>{employee.empDepartment}</b></li>
                <li className="list-group-item"><span>total </span><b>{employee.empExperience}</b><span> years of experience</span></li>
            </ul>
            <div className="card-body">
                <Link to={'/updateemployee/'+employee.empId} className="card-link">EDIT</Link>
                <a href="#" className="card-link">DELETE</a>

        {/*  <button onClick={()=>passEmpId(employee.empId)}>EDIT</button>  */}
            </div>
        </div>
    </div>
    </div>
    );
}

export default EmployeeCard;

