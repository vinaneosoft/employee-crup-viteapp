import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getAllEmployees, deleteEmployeeById } from "../model/employeecrud";

function Employees(){
     // manage many employees
     // currently we create fake employees array
    let [employees, setEmployees]=useState([]);
    let [errorMessage, setMessage]=useState("");

    async function getEmps(){
        const data=await getAllEmployees();
        //console.log(data); // array with emps, [], null
        if(data.length==0)
           // console.log("NO EMPLOYEES FOUND");
           {
            setMessage("...........NO EMPLOYEES FOUND.............");
            setEmployees(data);
           }
         else if(data=="Not Found"){
            //console.log(data);
            setMessage("...........Something went wrong............");
            //alert("Something went wrong.....");
         }
         else   {
            // data contains employees
            //employees=data;
            setEmployees(data);
         }            
    
    }

    async function deleteEmp(id){
           const b=confirm("Do you really want to delete??????");
            if(b){
                const data= await deleteEmployeeById(id);
                alert(`employee with id ${data.id} deleted successfully......`); 
                getEmps();
            }
    }   



    useEffect( ()=>{
        console.log("setup......");
        getEmps();
        
    }, []);

    /* react props : parent has employee object to be shared to direct child */
    const employeeCards= employees.map(employee=><EmployeeCard key={employee.id}  employee={employee} deleteEmp={deleteEmp} ></EmployeeCard>)
    return (
        <>
        <h4>{errorMessage}</h4>
        <article className="d-flex flex-wrap justify-content-evenly">
            {employeeCards}
        </article>
        </>
  
    );
}

export default Employees;