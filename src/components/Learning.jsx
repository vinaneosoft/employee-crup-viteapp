import React from "react";



function Learning(){
    let department="JS";
    let married=true;
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
      </>
    );
}

export default Learning;
/*
<React.Fragment>   is similar to <>
*/