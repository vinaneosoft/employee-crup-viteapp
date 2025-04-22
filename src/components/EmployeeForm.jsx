import { useState } from "react";

function EmployeeForm(){
    const departments=[
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
        empId:"", empName:"", profile:"", 
        empDescription:"", 
        empDepartment:"", empExperience:"", joiningDate:"", 
        profilePic:'' 
    });

    return(
        <>
         <h4 className="text-center">EMPLOYEE INPUT FORM</h4>
         <div className="d-flex justify-content-center p-3">
            <form className="bg-secondary w-50 p-3" >
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input type="text" value={employee.empName}  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">PROFILE</label>
                    <input type="text" value={employee.profile}  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">SHORT DESCRIPTION</label>
                    <textarea  className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">DEPARTMENT ID</label>
                    <select className="form-select">
                        {
                            departments.map((dept,idx)=><option key={idx} value={dept.deptId}>
                            {dept.deptName}
                            </option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">EXPERIENCE (in year)</label>
                    <input type="number"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">JOINING DATE</label>
                    <input type="date"  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">PROFILE PIC LINK</label>
                    <input type="text"  className="form-control"/>
                </div>
                <button type="submit" className="mx-3 btn btn-primary">ADD</button>
                <button type="reset" className="btn btn-primary">RESET</button>
            </form>
        </div>
        </>
    );
}
export default EmployeeForm;