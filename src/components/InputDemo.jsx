import { useRef, useState } from "react";

function InputDemo(){
    let [empName, setName] =useState("");

    let empnameRef=useRef();

    function getEmployeeName(){
        console.log(empnameRef.current.value);
       // empName=empnameRef.current.value;
       setName(empnameRef.current.value);
    }
    return (
       <div>
        <h5>Uncontrolled Input fields</h5>
         <label>Enter Employee Name:</label>
         <input type="text" defaultValue="sonali" ref={empnameRef} onBlur={getEmployeeName}></input>
        <br></br> <small>in uncontrolled input filed you can not set initial value using
            value attribute. 
            use jsx attribute defaultValue in uncontrolled fields
         </small>
         <p>
            Employee name is <b>{empName}</b>
         </p>
       </div>
    );


}

export default InputDemo;