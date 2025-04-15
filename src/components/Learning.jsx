import React from "react";



function Learning(){
    let department="JS";
    return(
      <React.Fragment>
            <h5>Ternary Operator in JSX Expression</h5>
            <p>
                {department.toUpperCase()=='DN'
                ?<b>you are allowed to attend training</b>
                :<i>NOT ALLOWED</i>}
            </p>
      </React.Fragment>
    );
}

export default Learning;
/*
<React.Fragment>   is similar to <>
*/