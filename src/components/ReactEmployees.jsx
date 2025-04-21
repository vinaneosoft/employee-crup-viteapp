/* looping using javascript , JSX and expressions */
function ReactEmployees({sendtoParent}){  //4. take fun ref from  prop
    const employeeTypes="React Employees"; // 3. data at child side

    const olType="a";
    const reactEmps=['Suchita','Kiran','karan',"Pooja"] //string[]
    const liElements=reactEmps
         /* .filter(emp=>emp.toUpperCase().startsWith("K")) */ 
        .map((emp,idx)=><li key={idx}>{emp}</li>); //React.JSX.Element[]
    return (
      <>
      <h5>{employeeTypes}</h5>
       <ol type={olType}> 
           {liElements}
       </ol>
       <div>
        <button className="btn btn-secondary" onClick={()=>sendtoParent(employeeTypes)}>SEND</button> {/*5. call parent function by passing child data */}
       </div>
      </>
    
    )
}

export default ReactEmployees
/* type = 1, A, a, I, i */
