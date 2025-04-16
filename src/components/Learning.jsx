import React from "react";
import ReactEmployees from "./ReactEmployees";
import AngularEmployees from "./AngularEmployees";



function Learning(){
    let department="JS";
    let married=true;
    let training="react";
    // js styling : css keys must be in camel case
    const paraStyle={
    textDecoration: "underline",
    color:'yellow'
    }
    return(
      <>
            <div>
            <p style={paraStyle}>Employee CRUD operations : Create, Read, Update, Delete</p>
            </div>
           <div>
           <h5 className="text-info bg-danger">Ternary Operator in JSX Expression (if then else statements)</h5>
            <p style={paraStyle} >
                {department.toUpperCase()=='DN'
                ?<b>you are allowed to attend training</b>
                :<i>NOT ALLOWED</i>}
            </p>
           </div>
           <div>
            <h5 className="text-center">&& operator (if then statements)</h5>
            <p className="fw-bold">
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