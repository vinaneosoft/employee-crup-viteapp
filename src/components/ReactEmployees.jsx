/* looping using javascript , JSX and expressions */
function ReactEmployees(){
    const oltype="a";
    const reactEmps=['Suchita','Kiran','Karan',"Pooja"] //string[]
    const lielements=reactEmps.map(emp=><li>{emp}</li>); //React.JSX.Element[]
    return (
       <ol type={oltype}> 
           {lielements}
       </ol>
    )
}

export default ReactEmployees
/* type = 1, A, a, I, i */
