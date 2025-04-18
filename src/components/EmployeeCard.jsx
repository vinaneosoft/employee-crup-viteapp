

function EmployeeCard({employee}){
    return(
    <div className="card mb-3" style={{maxWidth: "540px"}}>
    <div className="row g-0">
        <div className="col-md-4">
        <img src={employee.profilePic} className="img-fluid rounded-start" alt={employee.empName} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"><span>{employee.empName}</span><span>{employee.empId}</span></h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
    </div>
    </div>
    );
}

export default EmployeeCard;

