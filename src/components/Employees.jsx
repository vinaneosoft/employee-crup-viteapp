import { useEffect, useRef, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getAllEmployees, deleteEmployeeById } from "../model/employeecrud";
import { MenuItem, Select, TextField } from "@mui/material";

function Employees(){
     // manage many employees
     // currently we create fake employees array
    let [employees, setEmployees]=useState([]);
    let [errorMessage, setMessage]=useState("");
    let originalEmployees=useRef([]);
    let searchQuery=useRef();
    let [searchKey, setKey]=useState("id");
    async function getEmps(){
        const data=await getAllEmployees();
        //console.log(data); // array with emps, [], null
        if(data.length==0)
           // console.log("NO EMPLOYEES FOUND");
           {
            setMessage("...........NO EMPLOYEES FOUND.............");
            setEmployees(data);
           originalEmployees.current=data;
           }
         else if(data=="Not Found"){
            //console.log(data);
            setMessage("...........Something went wrong............");
            //alert("Something went wrong.....");
         }
         else   {
            // data contains employees
            //employees=data;
            setMessage("");
            setEmployees(data); // setter re-render
            originalEmployees.current=data;
         }            
    
    }
    async function deleteEmp(id){
           const b=confirm("Do you really want to delete??????");
           // data, id is wrong, url is wrong
            if(b){
                const data= await deleteEmployeeById(id);
                if(data=="Not Found")
                    alert(`Something went wrong while deleting employee with id ${id}`)
                else{
                    alert(`employee with id ${data.id} deleted successfully......`); 
                    getEmps();
                }
            }
    }   
    function searchEmployee(){
        // on which basis u want to search : serachKey
        // what u want to compare : searchQuery
       // console.log(searchKey);
       // console.log(searchQuery.current.value);  
        // filter
        const filteredEmployees=originalEmployees.current.filter((employee)=>
            employee[searchKey].toLowerCase().includes(searchQuery.current.value.toLowerCase())
        );
        setEmployees(filteredEmployees); // its changing original array
        // we are not able to recover our original array so we used useRef originalEmployees
    }
    /* empty depedancy : one time when component mounted first time */
    useEffect(()=>{
        console.log("setup......");
        getEmps();
    },[]);

    /* react props : parent has employee object to be shared to direct child */
    const employeeCards= employees.map(employee=><EmployeeCard key={employee.id}  employee={employee} deleteEmp={deleteEmp} ></EmployeeCard>)
    return (
        <>
        <div className="bg-danger p-2">
            <label>Search Employee on the basis of </label>
            <Select value={searchKey} onChange={(e)=>setKey(e.target.value)}>
                <MenuItem value="empDepartment">DEPT CODE</MenuItem>
                <MenuItem value="empExperience">Experience</MenuItem>
                <MenuItem value="id">ID</MenuItem>
                <MenuItem value="joiningDate">joining date</MenuItem>
                <MenuItem value="empName">NAME</MenuItem>
                <MenuItem value="profile">Profile</MenuItem>
            </Select>
          {/*  use inputRef attribute instead of ref  for below MUI component */}
            <TextField variant="standard"  inputRef={searchQuery} onKeyUp={searchEmployee}></TextField>

        </div>
        <h4>{errorMessage}</h4>
        <article className="d-flex flex-wrap justify-content-evenly">
            {employeeCards}
        </article>
        </>
  
    );
}

export default Employees;