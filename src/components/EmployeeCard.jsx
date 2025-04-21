

function EmployeeCard({employee}){
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
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span>joined on </span><b>{employee.joiningDate}</b></li>
                <li class="list-group-item"><span>working in </span><b>{employee.empDepartment}</b></li>
                <li class="list-group-item"><span>total </span><b>{employee.empExperience}</b><span> years of experience</span></li>
            </ul>
        </div>
    </div>
    </div>
    );
}

export default EmployeeCard;

