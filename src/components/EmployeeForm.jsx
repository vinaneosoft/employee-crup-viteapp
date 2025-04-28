import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { addEmployee, updateEmployee } from "../model/employeecrud";
function EmployeeForm(){
    const location = useLocation(); // give u current location
    const departments=[
        {
            deptId:'SM',
            deptName:'Sales and Marketting'
        },
        {
            deptId:'LD',
            deptName:'Learning Devlopment'
        },
        {
            deptId:'PT',
            deptName:'Python'
        },
        {
            deptId:'DN',
            deptName:'Dot Net'
        }
    ]

    const emp=useLoaderData(); // load the data from backend when we are using route params
    
    function getInitialState(){
        if(location.pathname.includes("add")){
            return {
                empName:"", profile:"", 
               empDescription:"", 
               empDepartment:departments[0].deptId, empExperience:"", joiningDate:"", 
               profilePic:'' 
           }
        }
        else
            return emp
    }

    let [employee, setEmployee]=useState(()=>getInitialState());
    const {empId}=useParams(); // to extract route parameters
    console.log(empId);  // we need this id in future to fetch current details of employee to edit
    // how to read the empId from state coming from card
   // useLocation extract state
 
   //console.log(location);
  /*  const stateobj = location.state;
   console.log(stateobj); */ // no need to fetch the employee from backend

   const navigate=useNavigate(); //returns function that lets you navigate programmatically in the browser in response to user interactions or effects
  
   //console.log(data);
   //setEmployee(emp);

    

    function collectDetails(event){
        console.log(event.target.id);
        console.log(event.target.value);
        setEmployee(
            {
                ...employee,
                [event.target.id]:event.target.value
            }
        )
    }
    async function addEmp(event){
        event.preventDefault();
       // console.log(employee)
        const emp=await addEmployee(employee);
        if(emp=="Not Found")
            alert("something went wrong while adding...")
        else{
        //  console.log(emp);
            alert(`Employee with id ${emp.id} added successfully... `);
            navigate('/showemployees');
        }

    }
    async function updateEmp(event){
        event.preventDefault();
        console.log(employee); // updated details to pass to backend
         const emp=await updateEmployee(employee);
        if(emp=="Not Found")
            alert("something went wrong while updating...")
        else{
        //  console.log(emp);
            alert(`Employee with id ${emp.id} updated successfully... `);
            navigate('/showemployees');
        } 
    }
    
    /* alternate option to load data on mouting of component
    is routing loader function */
   /* 
    useEffect(()=>{
        updateEmp(empId);
    }, []); */
    return(
        <>
         <h4 className="text-center">EMPLOYEE {location.pathname.includes("add") ? "INPUT" : "UPDATE"} FORM</h4>
         <div className="d-flex justify-content-center p-3">
            <form className="bg-secondary w-50 p-3" onSubmit={location.pathname.includes("add") ? addEmp : updateEmp} >
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input type="text" id="empName" value={employee.empName} onChange={collectDetails} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">PROFILE</label>
                    <input type="text" id="profile" value={employee.profile} onChange={collectDetails}  className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">SHORT DESCRIPTION</label>
                    <textarea id="empDescription" value={employee.empDescription} onChange={collectDetails} className="form-control" required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">DEPARTMENT ID</label>
                    <select id="empDepartment" className="form-select" onChange={collectDetails} value={employee.empDepartment} required>
                        {
                            departments.map((dept,idx)=><option key={idx} value={dept.deptId} required>
                            {dept.deptName}
                            </option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">EXPERIENCE (in year)</label>
                    <input type="number" id="empExperience" onChange={collectDetails} value={employee.empExperience}  className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">JOINING DATE</label>
                    <input type="date" id="joiningDate" onChange={collectDetails} value={employee.joiningDate} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">PROFILE PIC LINK</label>
                    <input type="text" id="profilePic" onChange={collectDetails} value={employee.profilePic} className="form-control" required/>
                </div>
                <button type="submit" className="mx-3 btn btn-primary">{location.pathname.includes("add") ? "ADD" : "UPDATE"}</button>
                <button type="reset" className="btn btn-primary">RESET</button>
            </form>
        </div>
        </>
    );
}
export default EmployeeForm;

