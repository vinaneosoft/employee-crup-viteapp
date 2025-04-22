import { useEffect, useRef, useState } from "react";

function InputDemo(){
    let [empName, setName] =useState("");
    let empnameRef=useRef();

    function getEmployeeName(){
        console.log(empnameRef.current.value);
       // empName=empnameRef.current.value;
       setName(empnameRef.current.value);
    }

    let [experience, setExp]=useState(10);
    useEffect(()=>console.log("UI rendered"), [empName, experience]);
    return (
        <>
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
            <div>
                <h5>Controlled Input fields</h5>
                <label>Enter Experience:</label>
                <input type="text" value={experience} onChange={(event)=>setExp(event.target.value)}></input>
                <p>
                    <small>controlled inputs fields are controlled by component by binding state variable
                        in value attribute
                        onChange is compulsory event handler to set the data to state variable
                        otherwise field becomes readonly
                    </small><br />
                    <small>
                        this  value, onChange, setter are compulsory steps in controlled input fields
                    </small>
                </p>
                <p>
                    Employee Experience is <b>{experience}</b>
                </p>
            </div>
       </>
    );


}

export default InputDemo;