
/* looping using javascript , JSX and expressions */
function AngularEmployees(){
    const angularEmps=['Mohan','Hairsh','Poonam'];
    return (
      <>
      <h5>Angular Employees</h5>
       <ol>
        {angularEmps.map((emp,i)=><li key={i}>{emp}</li>)}
       </ol>
      </>
    );
}

export default AngularEmployees

