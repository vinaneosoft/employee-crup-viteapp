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
    function handleClickEvent(){
       alert("Button clicked.....");
    }
    function handleClickEvent2(event){
        console.log(event);
        alert(event.target)
    }
    function accessName(name){
        alert("hello "+name);
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
           <div>
            <h4 >Event Handling</h4>
            <h5>Calling non parameterized function</h5>
            <p>
                <button className="btn btn-primary" 
                onClick={handleClickEvent}>CLICK</button>
            </p>
            <h5>Calling parameterized function (implicit parameter - event object)</h5>
            <p>
                <button className="btn btn-primary" 
                onClick={handleClickEvent2}>CLICK 2</button>
            </p>
            <h5>Calling parameterized function (explicit parameter)</h5>
            <p>
                <button className="btn btn-primary" 
                onClick={()=>accessName("veena") }>SEND NAME</button>
            </p>
            <p>
                <h5>Inline javascript</h5>
                <button className="btn btn-primary" 
                onClick={()=>{
                    alert("inline js")
                    console.log("hi");
                    console.log("hello");
                }}>CLICK-3</button>
            </p>
           </div>
      </>
    );
}

export default Learning;
/*
<React.Fragment>   is similar to <>
*/

