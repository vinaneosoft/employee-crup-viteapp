import EmployeeCard from "./EmployeeCard";

function Employees(){
     // manage many employees
     // currently we create fake employees array
    let employees=[]

    /* react props : parent has employee object to be shared to direct child */
    const employeeCards= employees.map(employee=><EmployeeCard key={employee.empId}  employee={employee} ></EmployeeCard>)
    return (
        <article className="d-flex flex-wrap justify-content-evenly">
            {employeeCards}
        </article>
    );
}

export default Employees;