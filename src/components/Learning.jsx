import React from "react";
import ReactEmployees from "./ReactEmployees";
import AngularEmployees from "./AngularEmployees";



function Learning(){
    let department="JS";
    let married=true;
    let training="react";
    return(
      <>
           <div>
           <h5>Ternary Operator in JSX Expression (if then else statements)</h5>
            <p>
                {department.toUpperCase()=='DN'
                ?<b>you are allowed to attend training</b>
                :<i>NOT ALLOWED</i>}
            </p>
           </div>
           <div>
            <h5>&& operator (if then statements)</h5>
            <p>
                {married && <mark>Employee is married</mark>}
            </p>
           </div>
           <div>
            <h5> Employee List for {training.toUpperCase()} training </h5>
                {
                    training.toUpperCase()=="REACT" 
                    ? <ReactEmployees></ReactEmployees>
                    : <AngularEmployees></AngularEmployees>
                }
           </div>
      </>
    );
}

export default Learning;
/*
<React.Fragment>   is similar to <>
*/