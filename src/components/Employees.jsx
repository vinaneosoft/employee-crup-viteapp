import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getAllEmployees } from "../model/employeecrud";

function Employees(){
     // manage many employees
     // currently we create fake employees array
    let [employees, setEmployees]=useState([]);

    async function getEmps(){
        const data=await getAllEmployees();
        console.log(data); // array with emps, [], null
        if(data.length==0)
            console.log("NO EMPLOYEES FOUND");
         else if(data==null)
            console.log("Something went wrong....");
         else   {
            // data contains employees
            //employees=data;
            setEmployees(data);
         }            
    
    }
    useEffect( ()=>{
        console.log("setup......");
        getEmps();
        
    }, []);

    /* react props : parent has employee object to be shared to direct child */
    const employeeCards= employees.map(employee=><EmployeeCard key={employee.id}  employee={employee} ></EmployeeCard>)
    return (
        <article className="d-flex flex-wrap justify-content-evenly">
            {employeeCards}
        </article>
    );
}

export default Employees;