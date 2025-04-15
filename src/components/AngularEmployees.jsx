
/* looping using javascript , JSX and expressions */
function AngularEmployees(){
    const angularEmps=['Mohan','Hairsh','Poonam'];
    return (
       <ol>
        {angularEmps.map((emp,i)=><li key={i}>{emp}</li>)}
       </ol>
    );
}

export default AngularEmployees

