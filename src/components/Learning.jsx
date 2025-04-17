import React, { useEffect, useRef, useState } from "react";
import ReactEmployees from "./ReactEmployees";
import AngularEmployees from "./AngularEmployees";



function Learning(){

    let [department, setDept]=useState("JS"); //1.
    useEffect(()=>console.log("UI rendered"));

    let [married, setStatus]=  useState(true);  //1.

    let trainingRef =useRef(); //React.RefObject

    let training="angular"; // maintain state of training variable using useState

    // js styling : css keys must be in camel case
    const paraStyle={
    textDecoration: "underline",
    color:'yellow'
    }
    function handleClickEvent(){
       alert("Button clicked.....");
    }
    function handleClickEvent2(e){
        console.log(e);
        alert(e.target)
    }
    function accessName(name){
        alert("hello "+name);
    }
    function getCompanyName(company, event){
        alert(company+" "+event.target);
    }
   
    function checkEntry(event){
       // console.log(event.target.value); // UI
        //department=event.target.value; // wrong logic in react : mutable logic 
        setDept(event.target.value) // right logic , immutable logic in react //2.
    }
    function checkMaritalStatus(event){
        //console.log(event.target.value); 
        //console.log(typeof event.target.value); 
        setStatus(event.target.value=="true" ? true : false); //3
    }
    function getTrainingDetails(){
        // event : button
        // value : textfield
       // const ele=document.getElementById("tech") // basci script logic
       // const value=ele.value;
       //console.log(trainingRef);
       //console.log(trainingRef.current.value);
     // call setter to change value of training variable
    }

    return(
      <>
            <div>
            <p style={paraStyle}>Employee CRUD operations : Create, Read, Update, Delete</p>
            </div>
           <div>
           <h5 className="text-info bg-danger">Ternary Operator in JSX Expression (if then else statements)</h5>
            <p><label>Department : </label>{department}</p>
            <p style={paraStyle} >
                {department.toUpperCase()=='DN'
                ?<b>you are allowed to attend training</b>
                :<i>NOT ALLOWED</i>}
            </p>
            <label>Enter Dept code (DN, JS, PHP):</label>
            <input type="text" onKeyUp={checkEntry}></input>
           </div>
           <hr />
           <div>
            <h5 className="text-center">&& operator (if then statements)</h5>
            <label>Are you married?</label>   { /* 2. */}
            <select onChange={checkMaritalStatus}>
                <option value="true">YES</option>
                <option value="false">NO</option>
            </select>
            <br />
            <p className="fw-bold">
                {married && <mark>Employee can work Hybrid (WFH / WFO)</mark>}
            </p>
           </div>
           <div>
            <datalist id="trainingprograms">
                <option value="angular">Angular</option>
                <option value="python">Python</option>
                <option value="react">React</option>
                <option value="web basics">Web Basics</option>
            </datalist>
            <label>Which training to start?</label>
            <input className="input-control" type="text" ref={trainingRef}  list="trainingprograms"></input>
            <button className="btn btn-success" 
            onClick={getTrainingDetails}>SEND</button>
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
            <h5>Inline javascript</h5>
            <p>
                <button className="btn btn-primary" 
                onClick={()=>{
                    alert("inline js")
                    console.log("hi");
                    console.log("hello");
                }}>CLICK-3</button>
            </p>
            <h5>Calling parameterized function (explicit parameter, implicit parameter)</h5>
            <p>
                <button className="btn btn-primary" 
                onClick={(ev)=>getCompanyName("Neosoft", ev) }>SEND NAME</button>
            </p>
           
           </div>
      </>
    );
}

export default Learning;
/*
<React.Fragment>   is similar to <>
*/

/* Uncontrolled Input fields 
take user input : deparment code onKeyUp
department variable : changed accoroding user input
state change 
1. jsx element : input type=text
2. handle keyup event
3. maintain state of department variable in useState hook
4. call setter function of hook and change deparment value*/