import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { addEmployee } from "../model/employeecrud";
function EmployeeForm(){

    const {empId}=useParams(); // to extract route parameters
    console.log(empId);  // we need this id in future to fetch current details of employee to edit
    // how to read the empId from state coming from card
   // useLocation extract state

   const location = useLocation(); // give u current location
   //console.log(location);
   const obj = location.state;
   console.log(obj);
   
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

   let [employee, setEmployee]=useState({
         empName:"", profile:"", 
        empDescription:"", 
        empDepartment:departments[0].deptId, empExperience:"", joiningDate:"", 
        profilePic:'' 
    });

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
        console.log(employee)
        const emp=await addEmployee(employee);
        console.log(emp);
        alert(`Employee with id ${emp.id} added successfully... `);
/* later we will post this employee object to backend to store in json file */
    }

    return(
        <>
         <h4 className="text-center">EMPLOYEE INPUT FORM</h4>
         <div className="d-flex justify-content-center p-3">
            <form className="bg-secondary w-50 p-3" onSubmit={addEmp} >
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
                <button type="submit" className="mx-3 btn btn-primary">ADD</button>
                <button type="reset" className="btn btn-primary">RESET</button>
            </form>
        </div>
        </>
    );
}
export default EmployeeForm;

