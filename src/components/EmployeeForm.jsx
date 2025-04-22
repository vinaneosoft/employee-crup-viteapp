import { useEffect, useState } from "react";

function EmployeeForm(){
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
        empId:"", empName:"", profile:"", 
        empDescription:"", 
        empDepartment:departments[0].deptId, empExperience:"", joiningDate:"", 
        profilePic:'' 
    });

    function collectDetails(event){
        console.log(event.target.id);
        console.log(event.target.value);
        //employee.empName=event.target.value : react wants immutable object
        setEmployee(
            {
                ...employee,
                [event.target.id]:event.target.value

            }
        )
    }
    useEffect(()=>console.log(employee), [employee]);
    return(
        <>
         <h4 className="text-center">EMPLOYEE INPUT FORM</h4>
         <div className="d-flex justify-content-center p-3">
            <form className="bg-secondary w-50 p-3" >
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input type="text" id="empName" value={employee.empName} onChange={collectDetails} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">PROFILE</label>
                    <input type="text" id="profile" value={employee.profile} onChange={collectDetails}  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">SHORT DESCRIPTION</label>
                    <textarea id="empDescription" value={employee.empDescription} onChange={collectDetails} className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">DEPARTMENT ID</label>
                    <select id="empDepartment" className="form-select" onChange={collectDetails} value={employee.empDepartment}>
                        {
                            departments.map((dept,idx)=><option key={idx} value={dept.deptId}>
                            {dept.deptName}
                            </option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">EXPERIENCE (in year)</label>
                    <input type="number" id="empExperience" onChange={collectDetails} value={employee.empExperience}  className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">JOINING DATE</label>
                    <input type="date" id="joiningDate" onChange={collectDetails} value={employee.joiningDate} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">PROFILE PIC LINK</label>
                    <input type="text" id="profilePic" onChange={collectDetails} value={employee.profilePic} className="form-control"/>
                </div>
                <button type="submit" className="mx-3 btn btn-primary">ADD</button>
                <button type="reset" className="btn btn-primary">RESET</button>
            </form>
        </div>
        </>
    );
}
export default EmployeeForm;