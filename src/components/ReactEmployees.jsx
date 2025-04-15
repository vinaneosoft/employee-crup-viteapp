/* looping using javascript , JSX and expressions */
function ReactEmployees(){
    const olType="a";
    const reactEmps=['Suchita','Kiran','karan',"Pooja"] //string[]
    const liElements=reactEmps
         .filter(emp=>emp.toUpperCase().startsWith("K")) 
        .map((emp,idx)=><li key={idx}>{emp}</li>); //React.JSX.Element[]
    return (
       <ol type={olType}> 
           {liElements}
       </ol>
    
    )
}

export default ReactEmployees
/* type = 1, A, a, I, i */
