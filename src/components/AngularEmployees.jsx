import { useContext } from "react";
import { LearningContext } from "../model/context";

/* looping using javascript , JSX and expressions */
function AngularEmployees(){
    const angularEmps=['Mohan','Hairsh','Poonam'];

    /* 3. Consume data using hook useContext */
    const {courseName,courseDuration}=
    useContext(LearningContext);

    return (
      <>
       <p>
        <b>{courseName}</b> <br />
        <b>{courseDuration} hrs</b>
      </p>
      <h5>Angular Employees</h5>
       <ol>
        {angularEmps.map((emp,i)=><li key={i}>{emp}</li>)}
       </ol>
      </>
    );
}

export default AngularEmployees

